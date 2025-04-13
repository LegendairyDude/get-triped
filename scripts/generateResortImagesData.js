//Only does puj_resorts currently
const fs = require("fs");
const path = require("path");

// Base folder for all resorts inside puj_resorts
const resortsFolder = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "tripinImages",
  "destinations",
  "dominican_republic",
  "puj_resorts"
);

/**
 * Recursively scans a directory and returns an array of image file paths.
 * @param {string} dir - Directory to scan.
 * @param {string} relativeBase - Relative path from the "public" folder.
 * @returns {string[]} - Array of image paths.
 */
function getAllImagesRecursively(dir, relativeBase) {
  let images = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach((item) => {
    if (item.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(item.name)) {
      images.push(path.join(relativeBase, item.name));
    } else if (item.isDirectory()) {
      const subDirPath = path.join(dir, item.name);
      const newRelativeBase = path.join(relativeBase, item.name);
      images = images.concat(
        getAllImagesRecursively(subDirPath, newRelativeBase)
      );
    }
  });
  return images;
}

/**
 * Generates a mapping for a single resort's images.
 * It scans the top-level (grounds) and recurses through every subdirectory.
 * @param {string} rootDir - The root directory of the resort images.
 * @returns {Object} - An object with image categories as keys and arrays of image paths.
 */
function generateImageData(rootDir) {
  const data = {};

  // Get the resort folder name (e.g., "OceanElFaro_PUJ")
  const resortFolderName = path.basename(rootDir);

  // Top-level images (files that are directly in the rootDir)
  const rootItems = fs.readdirSync(rootDir, { withFileTypes: true });
  const topLevelFiles = rootItems
    .filter(
      (item) => item.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(item.name)
    )
    .map((item) =>
      path.join(
        "/",
        "images",
        "tripinImages",
        "destinations",
        "dominican_republic",
        "puj_resorts",
        resortFolderName,
        item.name
      )
    );
  data.grounds = topLevelFiles;

  // Process each subdirectory recursively.
  const subdirs = rootItems.filter((item) => item.isDirectory());
  subdirs.forEach((subdir) => {
    const subdirPath = path.join(rootDir, subdir.name);
    // The relative path for images (removing "public" part from the path)
    const relativeBase = path.join(
      "images",
      "tripinImages",
      "destinations",
      "dominican_republic",
      "puj_resorts",
      resortFolderName,
      subdir.name
    );
    // Recursively scan every nested folder within this subdirectory
    const recurisveImages = getAllImagesRecursively(subdirPath, relativeBase);
    // Normalize paths to use forward slashes
    data[subdir.name] = recurisveImages.map(
      (filePath) => "/" + filePath.replace(/\\/g, "/")
    );
  });

  return data;
}

/**
 * Scans every resort folder inside the base "puj_resorts" directory.
 * @param {string} baseDir - The directory containing all resort folders.
 * @returns {Object} - A mapping of each resort folder name to its images mapping.
 */
function generateAllResortsImageData(baseDir) {
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  const resortDirectories = entries.filter((entry) => entry.isDirectory());

  const allData = {};
  resortDirectories.forEach((resortDir) => {
    const resortName = resortDir.name;
    const resortFolderPath = path.join(baseDir, resortName);
    const imagesData = generateImageData(resortFolderPath);
    allData[resortName] = imagesData;
  });
  return allData;
}

const finalData = generateAllResortsImageData(resortsFolder);

// Option 1: Output the JSON mapping to the console
console.log(JSON.stringify(finalData, null, 2));

// Option 2: Save the JSON mapping to a file (e.g., src/data/allResortsImages.json)
fs.writeFileSync(
  path.join(__dirname, "..", "src", "data", "allResortsImages.json"),
  JSON.stringify(finalData, null, 2)
);

console.log(
  "Image data successfully generated and saved to src/data/allResortsImages.json"
);
