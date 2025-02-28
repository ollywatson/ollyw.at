import Script from "next/script";

const GoogleAnalytics = () => {
    return(
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-FPVCYLMVP9"></script>
            <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FPVCYLMVP9');
            `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;