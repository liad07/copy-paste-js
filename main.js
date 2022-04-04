function copy() {
    var copyText = document.getElementById("copy");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}
function paste(){
    x=document.getElementById("copy").value;
      document.getElementById("paste").value=x;

}