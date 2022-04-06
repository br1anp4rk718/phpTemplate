var urlParams = new URLSearchParams(window.location.search); //get all parameters
var network = urlParams.get('n');
var adDiv = document.getElementById('network-adTitle');

switch(network) {
	case 'tba':
	case 'tbatcr':
	case 'atba':
	case 'atbatcr':
	case 'tbamsntcr':
	case 'rmgem':
		adDiv.innerText += 'Advertisement';
		break;
	case 'ob':
	case 'obtcr':
	case 'aob':
	case 'aobtcr':
	case 'azemtcr':
	case 'ayahtcr':
	case 'aol':
	case 'yahtcr':
	case 'vmxgun':
		adDiv.innerText += 'Advertorial';
		break;
	default:
		adDiv.innerText += '';
}