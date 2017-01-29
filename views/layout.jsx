import React from 'react';
import { Header, Jumbotron } from 'watson-react-components';

export default function(props) {
    return (
        <html>
            <head>
                <title>Holland & Knight LLP Lending Platform </title>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="/css/watson-react-components.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <Header mainBreadcrumbs="powered by a Lending Platform created and maintained through a collaboritive effort between Holland & Knight LLP and First Green Bank" mainBreadcrumbsUrl="http://www.ibm.com/watson/developercloud/document-conversion.html" />
                <Jumbotron
                    serviceName="Lending Platform provided through a collaboritive effort between Holland & Knight LLP and First Green Bank and powered by Watson"
                    repository="https://github.com/watson-developer-cloud/document-conversion-nodejs"
                    documentation="http://www.ibm.com/watson/developercloud/doc/document-conversion"
                    apiReference="http://www.ibm.com/watson/developercloud/document-conversion/api/"
                    version="GA"
                    startInBluemix="https://console.ng.bluemix.net/registration/?target=/catalog/services/document-conversion/"
                    serviceIcon="/images/document-conversion.svg"
                    description="The Lending Platform replaces inefficient manual processes with powerful automation tools powered by Watson.  Below, you can begin the a new finance transactopm by uploading a credit approval documents, which may be in HTML, PDF, and Microsoft™ Word documents."
                />
                <div id="root">
                {props.children}
                </div>
            <script type="text/javascript" src="js/bundle.js"></script>
            <script type="text/javascript" src="js/vendors/google-analytics.js" defer async></script>
            </body>
    </html>
    );
}
