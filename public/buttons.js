function Modaleclose() {
	document.querySelector('#modalcont').style.display='none';
    document.querySelector('#greybg').style.display='none';
    document.getElementById('js-input-model').value = '';
    document.getElementById('js-proc').value = '';
    document.getElementById('js-op').value = '';
    document.getElementById('js-lan').value = '';
    document.getElementById('productImage').value = '';

}
function Modaleshow() {
	document.getElementById('modalcont').style.display='block';
    document.getElementById('greybg').style.display='block';
    document.getElementsByClassName("text-h")[0].innerText = "Create NAS"
    document.getElementById("submitBtn").innerText = "Submit"
}
function Modalecloseedit() {
	document.querySelector('#modalcont').style.display='none';
    document.querySelector('#greybg').style.display='none';
}
