'use client'
export default function CookieDeclaration(
    {
        domainGroupId,
        language,
        id,
    } : {
        domainGroupId: string,
        language?: string,
        id: string,
    } 
) {
    if (typeof window === 'undefined') {  
        return null;
      }
    if (!domainGroupId || !document) {
        return null;
    }
    if (domainGroupId.length !== 36) {
        console.warn(`The cookie bot domain group id is ${domainGroupId.length} characters, instead it should be 36 characters!`); // eslint-disable-line no-console
    }
    if (document.getElementById(id)?.innerHTML) {
        return null;
    }
    const script = document.createElement('script');
    script.setAttribute('id', 'CookieDeclaration');
    script.setAttribute('src', `https://consent.cookiebot.com/${domainGroupId}/cd.js`);
    script.setAttribute('type', 'text/javascript');
    script.async = true
    language && script.setAttribute('data-culture', language);
    const insertPosition = document.getElementById(id);
    insertPosition?.insertBefore(script, insertPosition.firstChild);
    return null;
}