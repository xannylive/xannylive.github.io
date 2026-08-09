const siteData = {

    kick: "https://kick.com/xannylive",

    instagram: "#",
    youtube: "#",
    tiktok: "#",
    discord: "#"

};


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const links = {

            kickButton: siteData.kick,

            kickButton2: siteData.kick,

            instagram: siteData.instagram,

            youtube: siteData.youtube,

            tiktok: siteData.tiktok,

            discord: siteData.discord

        };


        Object.entries(links).forEach(
            function ([id, url]) {

                const element =
                    document.getElementById(id);

                if (element && url) {
                    element.href = url;
                }

            }
        );

    }
);
