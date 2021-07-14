function initializeGA() {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    let gaCode = 'UA-146292002-1'

    ga('create', gaCode, 'auto');
    ga('send', 'pageview', location.pathname);
}

function triggerGA(eventName, customLabel = '', customAction = '') {
    switch (eventName) {
        case 'entre_em_contato':
            ga('send', {
                hitType: 'event',
                eventCategory: 'menu',
                eventAction: 'entre_em_contato',
                eventLabel: 'link_externo'
            });
            break;
        case 'download_pdf':
            ga('send', {
                hitType: 'event',
                eventCategory: 'menu',
                eventAction: 'download_pdf',
                eventLabel: 'download_pdf'
            });
            break;
        case 'analise':
            ga('send', {
                hitType: 'event',
                eventCategory: 'analise',
                eventAction: 'ver_mais',
                eventLabel: customLabel
            });
            break;
        case 'contato':
            console.log(`preencehu o formizin ${customAction}`)
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: customAction,
                eventLabel: "preencheu"
            });
            break;
        case 'contato_enviado':
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: 'contato',
                eventLabel: 'enviado'
            });
            break;
        default:
            break
    }
}

window.onload = function () {
    initializeGA()
}