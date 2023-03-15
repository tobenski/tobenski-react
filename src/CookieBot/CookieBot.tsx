'use client'
import React from 'react';

export default function CookieBot({
  domainGroupId,
  language,
  WidgetEnabled, //data-widget-enabled
  WidgetPosition, //data-widget-position
}: {
    domainGroupId: string,
    language: string,
    WidgetEnabled?: boolean,
    WidgetPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined,
}) {
  /* istanbul ignore next */
  if (typeof window === 'undefined') {
    return null;
  }
  if (!domainGroupId || !document) {
    return null;
  }
  if (domainGroupId.length !== 36) {
    console.warn(`The cookie bot domain group id is ${domainGroupId.length} characters, instead it should be 36 characters!`); // eslint-disable-line no-console
  }
  if (document.getElementById('CookieBot')) {
    return null
  }
  const script = document.createElement('script');
  script.setAttribute('id', 'CookieBot');
  script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
  script.setAttribute('data-cbid', domainGroupId);
  script.setAttribute('data-blockingmode', 'auto');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('data-widget-enabled', WidgetEnabled ? 'true' : 'false');
  WidgetPosition && script.setAttribute('data-widget-position', WidgetPosition);
  if (language) {
    script.setAttribute('data-culture', language);
  }
  const head = document.querySelector('html > head');  
 head?.insertBefore(script, head.firstChild);
  return (
  <>
    {/* <script
        id="CookieBot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid={domainGroupId}
        data-blockingmode='auto'
        type='text/javascript'
        data-widget-enabled={WidgetEnabled ? 'true' : 'false'}
        data-widget-posistion={WidgetPosition || 'top-left'}
        data-culture={language || 'da'}
        async
        /> */}
     {/* <script
       id="CookieDeclaration"
       src={`https://consent.cookiebot.com/${domainGroupId}/cd.js`}
       type="text/javascript"
       data-culture={language}
       async
     /> */}
    </>
  );
}

