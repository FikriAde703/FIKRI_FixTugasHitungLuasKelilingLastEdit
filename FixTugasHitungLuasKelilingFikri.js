function showSquare() {
    document.getElementById('square').style.display = 'block';
    document.getElementById('triangle').style.display = 'none';
    document.getElementById('circle').style.display = 'none';
}

function showTriangle() {
    document.getElementById('square').style.display = 'none';
    document.getElementById('triangle').style.display = 'block';
    document.getElementById('circle').style.display = 'none';
}

function showCircle() {
    document.getElementById('square').style.display = 'none';
    document.getElementById('triangle').style.display = 'none';
    document.getElementById('circle').style.display = 'block';
}

function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = length * width;
    const perimeter = 2 * (length + width);
    document.getElementById('rectangleArea').textContent = area;
    document.getElementById('rectanglePerimeter').textContent = perimeter;
}

function calculateTriangle() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    const area = (base * height) / 2;
    const perimeter = sideA + sideB + sideC;
    document.getElementById('triangleArea').textContent = area;
    document.getElementById('trianglePerimeter').textContent = perimeter;
}

function calculateCircle() {
    const radius = parseFloat(document.getElementById('radius').value);
    const area = Math.PI * Math.pow(radius, 2);
    const perimeter = 2 * Math.PI * radius;
    document.getElementById('circleArea').textContent = area;
    document.getElementById('circlePerimeter').textContent = perimeter;
}


showSquare(); // Menampilkan Persegi Panjang secara default

function reset() {
    // Reset nilai input untuk masing-masing bentuk
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('radius').value = '';

    // Reset hasil perhitungan untuk masing-masing bentuk
    document.getElementById('rectangleArea').textContent = '';
    document.getElementById('rectanglePerimeter').textContent = '';
    document.getElementById('triangleArea').textContent = '';
    document.getElementById('trianglePerimeter').textContent = '';
    document.getElementById('circleArea').textContent = '';
    document.getElementById('circlePerimeter').textContent = '';

    // Tampilkan kembali bentuk persegi
    showSquare();
}
