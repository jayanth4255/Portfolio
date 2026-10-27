/**
 * Real-time Email Verification & Anti-Fake Shield
 * Performs multi-layer validation:
 * 1. Strict RFC syntax and structure check
 * 2. Placeholder/dummy username pattern detection
 * 3. 60+ disposable and temporary email domains blocklist
 * 4. Live DNS MX (Mail Exchange) record verification via Google DNS-over-HTTPS (DoH)
 */

const DISPOSABLE_DOMAINS = new Set([
    'mailinator.com',
    'yopmail.com',
    'yopmail.fr',
    'yopmail.net',
    'tempmail.com',
    'temp-mail.org',
    '10minutemail.com',
    '10minutemail.net',
    'guerrillamail.com',
    'guerrillamail.biz',
    'guerrillamail.info',
    'guerrillamail.de',
    'guerrillamail.net',
    'guerrillamail.org',
    'sharklasers.com',
    'grr.la',
    'dispostable.com',
    'trashmail.com',
    'trashmail.net',
    'throwawaymail.com',
    'fakeinbox.com',
    'mytemp.email',
    'generator.email',
    'emailondeck.com',
    'getairmail.com',
    'mohmal.com',
    'crazymailing.com',
    'tempail.com',
    'dropmail.me',
    'inboxkitten.com',
    'nada.ltd',
    'burnermail.io',
    'maildrop.cc',
    'mintemail.com',
    'dayrep.com',
    'teleworm.us',
    'rhyta.com',
    'armyspy.com',
    'cuvox.de',
    'fleckens.hu',
    'gustr.com',
    'jourrapide.com',
    'superrito.com',
    'einrot.com',
    'asdf.com',
    'fake.com',
    'test.com',
    'example.com',
    'sample.com',
    'dummy.com',
    'nowhere.com',
    'qwerty.com',
    'xyz.com',
    'abc.com',
    'foo.com',
    'bar.com',
    'domain.com',
    'fakemail.com',
    'trashmail.me',
    'mailnesia.com',
    'harakirimail.com',
    'jetable.org',
    'spamgourmet.com',
    'anonaddy.me',
    'relay.firefox.com'
]);

const DUMMY_USERNAMES = new Set([
    'test',
    'testing',
    'fake',
    'asdf',
    'qwerty',
    'dummy',
    'fakeemail',
    'none',
    'null',
    'temp',
    'junk',
    'spam',
    'sample',
    'noemail',
    'nobody',
    '123456',
    'admin'
]);

/**
 * Validates whether an email address is real, deliverable, and not fake/disposable.
 * @param {string} rawEmail 
 * @returns {Promise<{ valid: boolean, error?: string }>}
 */
export async function verifyEmail(rawEmail) {
    if (!rawEmail || typeof rawEmail !== 'string') {
        return { valid: false, error: 'Please enter an email address.' };
    }

    const email = rawEmail.trim().toLowerCase();

    // 1. Strict RFC Syntax Regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Please enter a properly formatted email address (e.g. name@company.com).' };
    }

    const parts = email.split('@');
    if (parts.length !== 2) {
        return { valid: false, error: 'Invalid email format.' };
    }

    const [username, domain] = parts;

    // Check username length & repeated characters (e.g. "aaaaa", "11111")
    if (username.length < 2) {
        return { valid: false, error: 'Email username is too short.' };
    }
    if (/^(.)\1{3,}$/.test(username)) {
        return { valid: false, error: 'Please enter a genuine email address, not repeated characters.' };
    }

    // Check dummy username
    if (DUMMY_USERNAMES.has(username)) {
        return { valid: false, error: 'Placeholder usernames (like "test" or "fake") are not accepted. Please enter your real email.' };
    }

    // 2. Check Disposable & Dummy Domains
    if (DISPOSABLE_DOMAINS.has(domain)) {
        return { valid: false, error: 'Disposable or dummy email domains are not accepted. Please use your official company or personal email.' };
    }

    // TLD validation
    const tld = domain.split('.').pop();
    if (!tld || tld.length < 2) {
        return { valid: false, error: 'The email domain has an invalid top-level domain.' };
    }

    // 3. Live DNS MX Verification via Google DNS-over-HTTPS (DoH)
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

        const response = await fetch(
            `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`,
            {
                signal: controller.signal,
                headers: { Accept: 'application/dns-json' }
            }
        );
        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();

            // Status 3 = NXDOMAIN (Non-Existent Domain)
            if (data.Status === 3) {
                return { 
                    valid: false, 
                    error: `The domain "@${domain}" does not exist. Please check for spelling mistakes.` 
                };
            }

            // Check if MX records exist
            const hasMx = Array.isArray(data.Answer) && data.Answer.some(
                record => record.type === 15 && record.data && !record.data.trim().startsWith('0 .')
            );

            if (!hasMx) {
                // If no MX, check if an A record exists (some legacy domains accept email directly on A record)
                const aResponse = await fetch(
                    `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`,
                    { headers: { Accept: 'application/dns-json' } }
                );
                const aData = await aResponse.json();
                const hasA = Array.isArray(aData.Answer) && aData.Answer.some(r => r.type === 1);

                if (!hasA) {
                    return { 
                        valid: false, 
                        error: `The domain "@${domain}" cannot receive emails (no active mail servers found).` 
                    };
                }
            }
        }
    } catch {
        // Fallback: If network check fails or times out, proceed to not block legitimate recruiters during offline/restricted networks
    }

    return { valid: true };
}
