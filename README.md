# Tobenski React Components

This is Tobenski's React Components.

## Install

```
npm install tobenski-react
```

## Usage

### Ribbon
```
import { Ribbon } from "tobenski-react"
<Ribbon show size={5} position='TopLeft' bgColor='yellow' textColor='white'>Test</Ribbon>
```
Parent Container must be:
```
Posistion: relative;
```

### Cookiebot
```
import { CookieBot } from "tobenski-react"
```
in Rootlayout or app.ts
```
const domainGroupId = ''
<CookieBot 
    domainGroupId={domainGroupId}
    language='da'
    WidgetEnabled
    WidgetPosition='top-right' // top-left | top-right | bottom-left | bottom-right
    />
```
For CookieDeclaration Page:
```
import { CookieDeclaration } from "tobenski-react"
```
in cookies page:
```
const domainGroupId = ''
<div id="cookieContainer"></div>
<CookieDeclaration domainGroupId={domainGroupId} language='da' id="cookieContainer" />
```




