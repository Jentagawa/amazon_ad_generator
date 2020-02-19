function func() {
    function addValue(id, name) {
        var former_id = document.getElementById(id).value;
        var target = document.getElementsByClassName(name);
        var target = Array.from(target);
        for (var i = 0; i < target.length; ++i) {
            target[i].innerHTML = former_id;
        }
    }

    addValue("p_name", "af_name");
    addValue("p_desc", "af_desc");

    function addUrl(id, name, url) {
        var former_id = document.getElementById(id).value;
        var target = document.getElementsByClassName(name);
        var target = Array.from(target);
        target.forEach(function(value) {
            value.href = former_id;
        });
        var url_target = document.getElementsByClassName(url);
        var url_target = Array.from(url_target);
        for (var i = 0; i < url_target.length; ++i) {
            url_target[i].innerHTML = former_id;
        }
    }

    addUrl("p_url", "af_url", "code_url");

        function addSrc(id, name, url) {
        var former_id = document.getElementById(id).value;
        var target = document.getElementsByClassName(name);
        var target = Array.from(target);
        target.forEach(function(value) {
            value.src = former_id;
        });
        var url_target = document.getElementsByClassName(url);
        var url_target = Array.from(url_target);
        for (var i = 0; i < url_target.length; ++i) {
            url_target[i].innerHTML = former_id;
        }
    }
    
    addSrc("p_img", "af_img", "code_image");
}