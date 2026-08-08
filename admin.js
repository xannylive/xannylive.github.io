function saveSettings() {

    const settings = {

        primaryColor:
            document.getElementById("primaryColor").value,

        secondaryColor:
            document.getElementById("secondaryColor").value,

        crosshair:
            document.getElementById("crosshair").value,

        resolution:
            document.getElementById("resolution").value,

        vsync:
            document.getElementById("vsync").value,

        msaa:
            document.getElementById("msaa").value,

        texture:
            document.getElementById("texture").value,

        shader:
            document.getElementById("shader").value,

        contrast:
            document.getElementById("contrast").value,

        dpi:
            document.getElementById("dpi").value,

        sensitivity:
            document.getElementById("sensitivity").value,

        brightness:
            document.getElementById("brightness").value,

        nvidiaContrast:
            document.getElementById("nvidiaContrast").value,

        gamma:
            document.getElementById("gamma").value,

        vibrance:
            document.getElementById("vibrance").value,

        fpsGuide:
            document.getElementById("fpsGuide").value,

        kick:
            document.getElementById("kick").value,

        youtube:
            document.getElementById("youtube").value,

        instagram:
            document.getElementById("instagram").value

    };


    localStorage.setItem(
        "xannyliveSettings",
        JSON.stringify(settings)
    );


    document.getElementById("message").innerText =
        "✅ Ayarlar kaydedildi!";
}
