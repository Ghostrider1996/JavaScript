function coneProperties(radius, height) {
    // Calculate cone volume
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;

    // Calculate cone surface area
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let surfaceArea = Math.PI * radius * (radius + slantHeight);

    // Print the results
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

// Example usage
coneProperties(3, 5);
coneProperties(3.3, 7.8);
