const generateLink = () => {
    const linkElement = document.getElementById("mailLink");
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;

    linkElement.href = `mailto:aminsacirovic42@gmail.com?subject=${subject}&body=${body}`;
};  