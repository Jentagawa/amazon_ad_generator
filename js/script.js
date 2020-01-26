function func() {
    var p_name = document.getElementById("p_name").value;
    var p_name_target = document.getElementsByClassName("af_name");
    var p_name_target = Array.from(p_name_target);
    for (var i = 0; i < p_name_target.length; ++i) {
        p_name_target[i].innerHTML = p_name;
    }

    var p_desc = document.getElementById("p_desc").value;
    var p_desc_target = document.getElementsByClassName("af_desc");
    var p_desc_target = Array.from(p_desc_target);
    for (var i = 0; i < p_desc_target.length; ++i) {
        p_desc_target[i].innerHTML = p_desc;
    }

    var p_url = document.getElementById("p_url").value;
    var p_ul_target = document.getElementsByClassName("af_url");
    var p_ul_target = Array.from(p_ul_target);
    p_ul_target.forEach(function(value) {
        value.href = p_url;
    });
    var code_url_target = document.getElementsByClassName("code_url");
    var code_url_target = Array.from(code_url_target);
    for (var i = 0; i < code_url_target.length; ++i) {
        code_url_target[i].innerHTML = p_url;
    }

    var p_img = document.getElementById("p_img").value;
    var p_img_target = document.getElementsByClassName("af_img");
    var p_img_target = Array.from(p_img_target);
    p_img_target.forEach(function(value) {
        value.src = p_img;
    });
    var code_image_target = document.getElementsByClassName("code_image");
    var code_image_target = Array.from(code_image_target);
    for (var i = 0; i < code_image_target.length; ++i) {
        code_image_target[i].innerHTML = p_img;
    }
}