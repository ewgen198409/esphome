let targetTemperature = 20.0;
let heatDeadband = 0.5;
let heatOverrun = 0.5;

function adjustTemperature(value) {
    targetTemperature += value;
    document.getElementById('lbl_intemp').innerText = targetTemperature.toFixed(1) + '°C';
}

function changeMode() {
    const mode = document.getElementById('dropdown_id').value;
    // Implement mode change logic here
}

function adjustLight(value) {
    // Implement light adjustment logic here
}

function adjustGisteresis(type, value) {
    if (type === 'down') {
        heatDeadband = value;
    } else if (type === 'up') {
        heatOverrun = value;
    }
    // Implement gisteresis adjustment logic here
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function restartDevice() {
    // Implement device restart logic here
}

// Initially show the first page
showPage('page_one');