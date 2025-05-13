//Here we're importing items we'll need. You can add other imports here.

// Import functionality for parsing and processing files

// DOM Elements
const importContainer = document.createElement('div');
importContainer.className = 'import-container';
document.body.appendChild(importContainer);

// Create header
const header = document.createElement('div');
header.className = 'import-header';
header.innerHTML = '<h1>Import Data</h1>';
importContainer.appendChild(header);

// Step Navigation (Progress bar)
const stepNavigation = document.createElement('div');
stepNavigation.className = 'step-navigation';

// Progress bar
const stepProgress = document.createElement('div');
stepProgress.className = 'step-progress';
const progressBar = document.createElement('div');
progressBar.className = 'step-progress-bar';
progressBar.style.width = '25%'; // Initially at step 1 of 4 (25%)
stepProgress.appendChild(progressBar);
stepNavigation.appendChild(stepProgress);

// Step indicators
const stepIndicators = document.createElement('div');
stepIndicators.className = 'step-indicators';

// Define steps
const steps = [
  { id: 'upload', title: 'Upload File', number: 1 },
  { id: 'select', title: 'Select Table', number: 2 },
  { id: 'preview', title: 'Preview Data', number: 3 },
  { id: 'mapping', title: 'Map Fields', number: 4 }
];

// Create step indicators
steps.forEach((step, index) => {
  const stepIndicator = document.createElement('div');
  stepIndicator.className = 'step-indicator';
  
  const stepNumber = document.createElement('div');
  stepNumber.className = 'step-number';
  // First step is active by default
  if (index === 0) stepNumber.classList.add('active');
  stepNumber.textContent = step.number;
  
  const stepTitle = document.createElement('div');
  stepTitle.className = 'step-title';
  // First step is active by default
  if (index === 0) stepTitle.classList.add('active');
  stepTitle.textContent = step.title;
  
  stepIndicator.appendChild(stepNumber);
  stepIndicator.appendChild(stepTitle);
  
  // Add to indicators
  stepIndicators.appendChild(stepIndicator);
  
  // Add divider between steps (except after the last one)
  if (index < steps.length - 1) {
    const divider = document.createElement('div');
    divider.className = 'step-divider';
    stepIndicators.appendChild(divider);
  }
});

stepNavigation.appendChild(stepIndicators);
importContainer.appendChild(stepNavigation);

// Step content container
const stepContent = document.createElement('div');
stepContent.className = 'step-content';
importContainer.appendChild(stepContent);

// Create step containers
let currentStep = 1;
let totalSteps = steps.length;

// Step 1: Upload File
const uploadStep = document.createElement('div');
uploadStep.id = 'step-upload';
uploadStep.className = 'step active'; // First step is active
stepContent.appendChild(uploadStep);

// Step 2: Select Table
const selectStep = document.createElement('div');
selectStep.id = 'step-select';
selectStep.className = 'step';
stepContent.appendChild(selectStep);

// Step 3: Preview Data
const previewStep = document.createElement('div');
previewStep.id = 'step-preview';
previewStep.className = 'step';
stepContent.appendChild(previewStep);

// Step 4: Map Fields
const mappingStep = document.createElement('div');
mappingStep.id = 'step-mapping';
mappingStep.className = 'step';
stepContent.appendChild(mappingStep);

// Step 1 Content: File Upload
const fileInputContainer = document.createElement('div');
fileInputContainer.className = 'file-input-container';
uploadStep.appendChild(fileInputContainer);

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.id = 'file-input';
fileInput.className = 'file-input';
fileInput.accept = '.csv,.html,.txt,.json,.xlsx,.zip';
fileInputContainer.appendChild(fileInput);

const fileInputLabel = document.createElement('label');
fileInputLabel.htmlFor = 'file-input';
fileInputLabel.className = 'file-input-label';
fileInputLabel.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
  <span class="file-input-text">Click or drag file to upload</span>
`;
fileInputContainer.appendChild(fileInputLabel);

// Step 1 buttons (Next button only)
const uploadStepButtons = document.createElement('div');
uploadStepButtons.className = 'step-buttons';

const uploadNextButton = document.createElement('button');
uploadNextButton.className = 'step-button next-button';
uploadNextButton.disabled = true; // Initially disabled until file is selected
uploadNextButton.innerHTML = `
  Next
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
  </svg>
`;
uploadStepButtons.appendChild(uploadNextButton);
uploadStep.appendChild(uploadStepButtons);

// Create table container (for step 3)
const tableContainer = document.createElement('div');
tableContainer.className = 'table-container';
previewStep.appendChild(tableContainer);

// Create field mapping container (for step 4)
const mappingContainer = document.createElement('div');
mappingContainer.className = 'mapping-container';
mappingStep.appendChild(mappingContainer);

// Create transformations container
const transformationsContainer = document.createElement('div');
transformationsContainer.className = 'transformations-container';
transformationsContainer.style.display = 'none';
mappingStep.appendChild(transformationsContainer);

// Add import button to step 4
const importButtonContainer = document.createElement('div');
importButtonContainer.className = 'step-buttons';

const mappingBackButton = document.createElement('button');
mappingBackButton.className = 'step-button back-button';
mappingBackButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
  </svg>
  Back
`;

const importButton = document.createElement('button');
importButton.id = 'import-button';
importButton.className = 'import-button';
importButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
  </svg>
  Import Data
`;

importButtonContainer.appendChild(mappingBackButton);
importButtonContainer.appendChild(importButton);
mappingStep.appendChild(importButtonContainer);

// State variables
let fileData = null;
let parsedData = null;
let allTables = []; // Store multiple tables if found
let selectedTableIndex = 0; // Default to first table
let fileName = '';
let isProcessingZip = false;
let fieldMappings = []; // Store field mappings
let destinationFields = [ 
  // Slate category (main production info)
  "Slate", // Mandatory
  "Shot",
  "Season",
  "Episode",
  "Scene Number",
  "Part",
  "Shoot Date",
  "Shoot Day #",
  "Shoot Location",
  "Units",
  "Plate Type",
  
  // Take category (specific take information)
  "Take #", // Mandatory
  "Take Status",
  "Time of Take",
  "Time of Day",
  
  // Clip category (file and technical details)
  "Clip Identifier", // Mandatory
  "File Name",
  "File Path",
  "File Type",
  "File Size",
  "Duration",
  "Frame Rate",
  "Resolution",
  "Aspect Ratio",
  
  // Lens category (camera/lens info)
  "Camera",
  "Lens",
  "Focal Length",
  "T-Stop",
  "ISO",
  "White Balance",
  
  // Colour Grading
  "Look",
  "Colour Space",
  "LUT",
  
  // VFX
  "VFX Type",
  "VFX Notes",
  "VFX Elements",
  
  // Metadata (general info)
  "Created Date",
  "Modified Date",
  "Creator",
  "Notes",
  "Tags"
];
let transformations = {}; // Store field transformations

// Event listeners
fileInput.addEventListener('change', handleFileSelect);
fileInputLabel.addEventListener('dragover', handleDragOver);
fileInputLabel.addEventListener('dragleave', handleDragLeave);
fileInputLabel.addEventListener('drop', handleDrop);
importButton.addEventListener('click', processImport);

// Navigation buttons
uploadNextButton.addEventListener('click', () => goToStep(2));
mappingBackButton.addEventListener('click', () => goToStep(3));

// Global FileMaker handler - this will receive data from FileMaker scripts
window.FileMakerReceiveData = function(jsonString) {
  try {
    console.log("Received data from FileMaker:", jsonString);
    const data = JSON.parse(jsonString);
    
    // If data contains a configuration object, load it
    if (data && data.config) {
      loadMappingConfiguration(data.config);
    }
    
    // Process any other data from FileMaker if needed
    if (data && data.data) {
      // Handle main data if sent from FileMaker
      // This could be prepopulated source data, etc.
      console.log("Received data payload:", data.data);
    }
    
  } catch (error) {
    console.error("Error processing data from FileMaker:", error);
    showError("Failed to process data from FileMaker: " + error.message);
  }
};

// Step navigation function
function goToStep(step) {
  if (step < 1 || step > totalSteps) return;
  
  // Update current step
  currentStep = step;
  
  // Hide all steps
  document.querySelectorAll('.step').forEach(stepElement => {
    stepElement.classList.remove('active');
  });
  
  // Show current step
  let activeStepId;
  switch(step) {
    case 1:
      activeStepId = 'step-upload';
      break;
    case 2:
      activeStepId = 'step-select';
      populateTableSelectionStep();
      break;
    case 3:
      activeStepId = 'step-preview';
      renderTable(parsedData);
      break;
    case 4:
      activeStepId = 'step-mapping';
      createFieldMappings(parsedData);
      break;
  }
  
  document.getElementById(activeStepId).classList.add('active');
  
  // Update progress bar
  progressBar.style.width = `${(step / totalSteps) * 100}%`;
  
  // Update step indicators
  document.querySelectorAll('.step-number, .step-title').forEach((element, index) => {
    element.classList.remove('active', 'completed');
    
    if (index + 1 < step) {
      if (element.classList.contains('step-number')) {
        element.classList.add('completed');
      }
    } else if (index + 1 === step) {
      element.classList.add('active');
    }
  });
}

// Event handlers
function handleFileSelect(event) {
  console.log("File selected:", event.target.files[0]?.name);
  const file = event.target.files[0];
  if (file) {
    fileName = file.name;
    fileInputLabel.classList.add('active');
    fileInputLabel.querySelector('.file-input-text').textContent = fileName;
    
    if (file.name.toLowerCase().endsWith('.zip')) {
      console.log("ZIP file detected, processing...");
      processZipFile(file);
    } else {
      readFile(file);
    }
    
    // Enable the Next button
    uploadNextButton.disabled = false;
  }
}

function handleDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
  fileInputLabel.classList.add('active');
}

function handleDragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  if (!fileData) {
    fileInputLabel.classList.remove('active');
  }
}

function handleDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const file = event.dataTransfer.files[0];
  if (file) {
    console.log("File dropped:", file.name);
    fileName = file.name;
    fileInput.files = event.dataTransfer.files;
    fileInputLabel.classList.add('active');
    fileInputLabel.querySelector('.file-input-text').textContent = fileName;
    
    if (file.name.toLowerCase().endsWith('.zip')) {
      console.log("ZIP file detected, processing...");
      processZipFile(file);
    } else {
      readFile(file);
    }
    
    // Enable the Next button
    uploadNextButton.disabled = false;
  }
}

// Function to process ZIP files
function processZipFile(file) {
  isProcessingZip = true;
  
  // Show loading message
  showProcessingMessage("Extracting ZIP file...");
  
  // Check if JSZip is available
  if (typeof JSZip === 'undefined') {
    console.error("JSZip library not found. Please include the JSZip library.");
    showError("ZIP processing failed: JSZip library not available");
    isProcessingZip = false;
    return;
  }
  
  console.log("Starting ZIP extraction");
  
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const zipData = e.target.result;
    
    // Use JSZip to extract the contents
    JSZip.loadAsync(zipData)
      .then(function(zip) {
        console.log("ZIP loaded successfully");
        
        // Look for data files in the ZIP
        const files = [];
        zip.forEach(function(relativePath, zipEntry) {
          if (!zipEntry.dir) {
            const extension = relativePath.split('.').pop().toLowerCase();
            if (['csv', 'html', 'txt', 'json', 'xlsx'].includes(extension)) {
              files.push({
                name: relativePath,
                entry: zipEntry,
                extension: extension
              });
            }
          }
        });
        
        console.log("Found", files.length, "potential data files in ZIP");
        
        if (files.length === 0) {
          showError("No compatible data files found in ZIP archive");
          isProcessingZip = false;
          removeProcessingMessage();
          return;
        }
        
        // Prioritize files based on their extension (CSV first, then HTML, then JSON, etc.)
        const priorities = { 'csv': 1, 'html': 2, 'json': 3, 'txt': 4, 'xlsx': 5 };
        files.sort((a, b) => (priorities[a.extension] || 99) - (priorities[b.extension] || 99));
        
        // Extract the highest priority file
        const targetFile = files[0];
        console.log("Extracting file from ZIP:", targetFile.name);
        
        // Update the UI to show which file we're extracting
        showProcessingMessage(`Extracting ${targetFile.name} from ZIP...`);
        
        // Extract the file content
        targetFile.entry.async("string").then(function(content) {
          console.log("File extracted successfully", targetFile.name);
          
          // Process the extracted file
          fileData = content;
          fileName = targetFile.name;
          
          try {
            parseFile(targetFile.extension, fileData);
            uploadNextButton.disabled = false;
            
            // Remove processing message
            removeProcessingMessage();
            
            console.log("ZIP file processed successfully");
          } catch (error) {
            console.error("Error parsing extracted file:", error);
            showError("Error processing file from ZIP: " + error.message);
          }
          
          isProcessingZip = false;
        }).catch(function(error) {
          console.error("Error extracting file from ZIP:", error);
          showError("Failed to extract file from ZIP: " + error.message);
          isProcessingZip = false;
          removeProcessingMessage();
        });
      })
      .catch(function(error) {
        console.error("Error processing ZIP file:", error);
        showError("Failed to process ZIP file: " + error.message);
        isProcessingZip = false;
        removeProcessingMessage();
      });
  };
  
  reader.onerror = function(event) {
    console.error("Error reading ZIP file:", event);
    showError("Error reading ZIP file");
    isProcessingZip = false;
    removeProcessingMessage();
  };
  
  reader.readAsArrayBuffer(file);
}

// Show processing message
function showProcessingMessage(message) {
  // Remove any existing processing message
  removeProcessingMessage();
  
  // Create processing message
  const processingMessage = document.createElement('div');
  processingMessage.id = 'processing-message';
  
  // Create spinner
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  
  processingMessage.textContent = message;
  processingMessage.appendChild(spinner);
  
  // Insert before the file input container
  uploadStep.insertBefore(processingMessage, fileInputContainer);
}

// Remove processing message
function removeProcessingMessage() {
  const existingMessage = document.getElementById('processing-message');
  if (existingMessage) {
    existingMessage.remove();
  }
}

function readFile(file) {
  console.log("Reading file:", file.name);
  const reader = new FileReader();
  
  reader.onload = function(e) {
    console.log("File loaded, size:", e.target.result.length);
    fileData = e.target.result;
    
    try {
      parseFile(file.type, fileData);
      // Enable the Next button
      uploadNextButton.disabled = false;
    } catch (error) {
      console.error("Error parsing file:", error);
      showError('Error parsing file: ' + error.message);
    }
  };
  
  reader.onerror = function(e) {
    console.error("Error reading file:", e);
    showError('Error reading file');
  };
  
  reader.readAsText(file);
}

function parseFile(fileType, content) {
  console.log("Parsing file of type:", fileType);
  
  try {
    // Reset state
    allTables = [];
    selectedTableIndex = 0;
    
    if (fileType.includes('csv') || fileName.endsWith('.csv')) {
      parsedData = parseCSV(content);
      allTables = [parsedData]; // Just one table for CSV
      console.log("Parsed as CSV");
    } else if (fileType.includes('html') || fileName.endsWith('.html')) {
      allTables = parseAllHTMLTables(content);
      
      if (allTables.length === 0) {
        throw new Error("No tables found in HTML file");
      } else if (allTables.length === 1) {
        parsedData = allTables[0];
        console.log("Parsed as HTML - single table");
      } else {
        console.log("Parsed as HTML - multiple tables:", allTables.length);
        parsedData = allTables[0]; // Set default selection
      }
    } else if (fileType.includes('json') || fileName.endsWith('.json')) {
      parsedData = parseJSON(content);
      allTables = [parsedData]; // Just one table for JSON
      console.log("Parsed as JSON");
    } else {
      // Try to auto-detect format
      if (content.trim().startsWith('{') || content.trim().startsWith('[')) {
        parsedData = parseJSON(content);
        allTables = [parsedData];
        console.log("Auto-detected as JSON");
      } else if (content.includes('</table>')) {
        allTables = parseAllHTMLTables(content);
        
        if (allTables.length === 0) {
          throw new Error("No tables found in HTML file");
        } else if (allTables.length === 1) {
          parsedData = allTables[0];
          console.log("Auto-detected as HTML - single table");
        } else {
          console.log("Auto-detected as HTML - multiple tables:", allTables.length);
          parsedData = allTables[0]; // Set default selection
        }
      } else {
        parsedData = parseCSV(content);
        allTables = [parsedData];
        console.log("Auto-detected as CSV");
      }
    }
    
    if (parsedData && parsedData.data && parsedData.data.length > 0) {
      console.log("Data parsed successfully:", parsedData.data.length, "rows");
    } else {
      console.warn("No data found in file");
      showError('No data found in file');
    }
  } catch (error) {
    console.error("Error in parseFile:", error);
    throw error;
  }
}

function populateTableSelectionStep() {
  // Clear existing content
  selectStep.innerHTML = '';
  
  // If there's only one table, skip to preview
  if (allTables.length <= 1) {
    goToStep(3);
    return;
  }
  
  // Create header
  const header = document.createElement('div');
  header.innerHTML = '<h2 class="mapping-title">Select Table to Import</h2>';
  header.innerHTML += '<p>Multiple tables found in the file. Please select a table to import:</p>';
  selectStep.appendChild(header);
  
  // Create table options
  const tableOptionsContainer = document.createElement('div');
  tableOptionsContainer.className = 'table-options';
  
  allTables.forEach((table, index) => {
    const option = document.createElement('div');
    option.className = 'table-option';
    option.dataset.index = index;
    
    // Select first option by default
    if (index === selectedTableIndex) {
      option.classList.add('selected');
    }
    
    const optionInfo = document.createElement('div');
    optionInfo.className = 'table-option-info';
    
    const optionName = document.createElement('div');
    optionName.className = 'table-option-name';
    optionName.textContent = `Table ${index + 1}`;
    
    const optionMeta = document.createElement('div');
    optionMeta.className = 'table-option-meta';
    optionMeta.textContent = `${table.data.length} rows, ${table.headers.length} columns`;
    
    optionInfo.appendChild(optionName);
    optionInfo.appendChild(optionMeta);
    
    option.appendChild(optionInfo);
    tableOptionsContainer.appendChild(option);
    
    // Add click handler
    option.addEventListener('click', () => {
      // Remove selection from all options
      document.querySelectorAll('.table-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      // Mark this option as selected
      option.classList.add('selected');
      selectedTableIndex = index;
      parsedData = allTables[index];
    });
  });
  
  selectStep.appendChild(tableOptionsContainer);
  
  // Create navigation buttons
  const buttons = document.createElement('div');
  buttons.className = 'step-buttons';
  
  const backButton = document.createElement('button');
  backButton.className = 'step-button back-button';
  backButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    Back
  `;
  backButton.addEventListener('click', () => goToStep(1));
  
  const nextButton = document.createElement('button');
  nextButton.className = 'step-button next-button';
  nextButton.innerHTML = `
    Next
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  `;
  nextButton.addEventListener('click', () => goToStep(3));
  
  buttons.appendChild(backButton);
  buttons.appendChild(nextButton);
  selectStep.appendChild(buttons);
}

function parseCSV(content) {
  console.log("Starting CSV parse");
  try {
    // Simple CSV parser (could be replaced with a more robust one)
    const lines = content.split(/\r?\n/);
    console.log("CSV lines:", lines.length);
    
    if (lines.length === 0) {
      throw new Error("Empty CSV file");
    }
    
    const headers = lines[0].split(',').map(header => header.trim());
    console.log("CSV headers:", headers);
    
    if (headers.length === 0) {
      throw new Error("No headers found in CSV");
    }
    
    const data = [];
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '') continue;
      
      const values = lines[i].split(',');
      const row = {};
      
      headers.forEach((header, index) => {
        row[header] = values[index] ? values[index].trim() : '';
      });
      
      data.push(row);
    }
    
    console.log("CSV parsing complete:", data.length, "rows");
    return { headers, data };
  } catch (error) {
    console.error("Error parsing CSV:", error);
    throw error;
  }
}

function parseAllHTMLTables(content) {
  // Create a temporary DOM element to parse HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  
  // Find all tables in the HTML
  const tableElements = tempDiv.querySelectorAll('table');
  
  if (tableElements.length === 0) {
    return [];
  }
  
  // Parse each table
  const tables = [];
  
  tableElements.forEach((tableElement, tableIndex) => {
    const tableName = tableElement.id || tableElement.className || `Table ${tableIndex + 1}`;
    const headers = [];
    const data = [];
    
    // Get headers from the first row
    const headerRow = tableElement.querySelector('tr');
    if (headerRow) {
      const headerCells = headerRow.querySelectorAll('th, td');
      headerCells.forEach(cell => {
        headers.push(cell.textContent.trim());
      });
    }
    
    // Get data from remaining rows
    const rows = tableElement.querySelectorAll('tr');
    for (let i = 1; i < rows.length; i++) {
      const row = {};
      const cells = rows[i].querySelectorAll('td');
      
      if (cells.length > 0) {
        headers.forEach((header, index) => {
          row[header] = cells[index] ? cells[index].textContent.trim() : '';
        });
        
        data.push(row);
      }
    }
    
    tables.push({
      name: tableName,
      headers: headers,
      data: data,
      rowCount: data.length,
      columnCount: headers.length
    });
  });
  
  return tables;
}

function parseJSON(content) {
  try {
    const json = JSON.parse(content);
    
    if (Array.isArray(json)) {
      if (json.length === 0) {
        throw new Error('Empty JSON array');
      }
      
      const headers = Object.keys(json[0]);
      return { headers, data: json };
    } else if (typeof json === 'object') {
      // Handle single object
      const headers = Object.keys(json);
      return { headers, data: [json] };
    } else {
      throw new Error('Invalid JSON format');
    }
  } catch (error) {
    throw new Error('Invalid JSON: ' + error.message);
  }
}

function renderTable(data) {
  if (!data || !data.headers || !data.data || data.data.length === 0) {
    return;
  }
  
  // Clear existing content
  previewStep.innerHTML = '';
  
  // Create header
  const header = document.createElement('div');
  header.innerHTML = '<h2 class="mapping-title">Data Preview</h2>';
  header.innerHTML += '<p>Preview of the data to be imported:</p>';
  previewStep.appendChild(header);
  
  // Create table
  const table = document.createElement('table');
  table.className = 'import-table';
  
  // Create header row
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  data.headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create data rows (limit to first 10 rows for preview)
  const tbody = document.createElement('tbody');
  
  const rowsToShow = Math.min(data.data.length, 10);
  for (let i = 0; i < rowsToShow; i++) {
    const row = data.data[i];
    const tr = document.createElement('tr');
    
    data.headers.forEach(header => {
      const td = document.createElement('td');
      td.textContent = row[header] || '';
      tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
  }
  
  table.appendChild(tbody);
  
  // Create table container
  const tableContainerElement = document.createElement('div');
  tableContainerElement.className = 'table-container';
  tableContainerElement.appendChild(table);
  previewStep.appendChild(tableContainerElement);
  
  // Add note if not showing all rows
  if (data.data.length > 10) {
    const note = document.createElement('div');
    note.className = 'table-preview-note';
    note.textContent = `Showing 10 of ${data.data.length} rows`;
    previewStep.appendChild(note);
  }
  
  // Create navigation buttons
  const buttons = document.createElement('div');
  buttons.className = 'step-buttons';
  
  const backButton = document.createElement('button');
  backButton.className = 'step-button back-button';
  backButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    Back
  `;
  // If there are multiple tables, go back to table selection, otherwise go to upload
  backButton.addEventListener('click', () => goToStep(allTables.length > 1 ? 2 : 1));
  
  const nextButton = document.createElement('button');
  nextButton.className = 'step-button next-button';
  nextButton.innerHTML = `
    Next
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  `;
  nextButton.addEventListener('click', () => goToStep(4));
  
  buttons.appendChild(backButton);
  buttons.appendChild(nextButton);
  previewStep.appendChild(buttons);
}

function createFieldMappings(data) {
  if (!data || !data.headers || !data.headers.length === 0) {
    return;
  }
  
  // Clear existing mappings
  fieldMappings = [];
  
  // For each destination field, create a mapping entry
  destinationFields.forEach(destField => {
    // Default matching source field to empty
    let bestMatchSourceField = '';
    let bestMatchScore = 0;
    let sampleValue = '';
    
    // Find best matching source field
    data.headers.forEach(sourceField => {
      // Calculate match score between this source field and destination field
      let matchScore = 0;
      
      // Exact match or case-insensitive match
      if (sourceField === destField) {
        matchScore = 1;
      } else if (sourceField.toLowerCase() === destField.toLowerCase()) {
        matchScore = 0.9;
      } else {
        // Find partial matches
        const sourceFieldLower = sourceField.toLowerCase();
        const destFieldLower = destField.toLowerCase();
        
        // Check for contains relationship
        if (sourceFieldLower.includes(destFieldLower) || destFieldLower.includes(sourceFieldLower)) {
          matchScore = 0.7;
        }
        
        // Check for word similarity (shared words)
        const sourceWords = sourceFieldLower.split(/[\s_-]+/);
        const destWords = destFieldLower.split(/[\s_-]+/);
        
        const sharedWords = sourceWords.filter(word => destWords.includes(word));
        if (sharedWords.length > 0) {
          const similarityScore = 0.5 * (sharedWords.length / Math.max(sourceWords.length, destWords.length));
          if (similarityScore > matchScore) {
            matchScore = similarityScore;
          }
        }
      }
      
      // If this source field is a better match, update
      if (matchScore > bestMatchScore) {
        bestMatchScore = matchScore;
        bestMatchSourceField = sourceField;
        sampleValue = getSampleValue(data, sourceField);
      }
    });
    
    // Only use a suggested field if the match is strong enough
    const suggestedField = bestMatchScore >= 0.7 ? bestMatchSourceField : null;
    
    fieldMappings.push({
      destinationField: destField,
      sourceField: bestMatchScore >= 0.7 ? bestMatchSourceField : '',
      sample: sampleValue,
      matchScore: bestMatchScore,
      suggestedField: suggestedField
    });
  });
  
  renderFieldMappings();
}

function getSampleValue(data, header) {
  // Get a sample value from the first row for this field
  if (data.data && data.data.length > 0) {
    return data.data[0][header] || '';
  }
  return '';
}

function renderFieldMappings() {
  mappingContainer.innerHTML = '';
  
  // Create header
  const mappingHeader = document.createElement('div');
  mappingHeader.className = 'mapping-header';
  
  const mappingTitle = document.createElement('div');
  mappingTitle.className = 'mapping-title';
  mappingTitle.textContent = 'Field Mapping';
  
  const mappingActions = document.createElement('div');
  mappingActions.className = 'mapping-actions';
  
  const autoMapButton = document.createElement('button');
  autoMapButton.className = 'auto-map-button';
  autoMapButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
    Auto-Map Fields
  `;
  
  const transformButton = document.createElement('button');
  transformButton.className = 'auto-map-button';
  transformButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
    Transformations
  `;
  
  const saveConfigButton = document.createElement('button');
  saveConfigButton.className = 'auto-map-button';
  saveConfigButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
    Save Config
  `;
  
  autoMapButton.addEventListener('click', autoMapFields);
  transformButton.addEventListener('click', showTransformations);
  saveConfigButton.addEventListener('click', saveMappingConfiguration);
  
  mappingActions.appendChild(autoMapButton);
  mappingActions.appendChild(transformButton);
  mappingActions.appendChild(saveConfigButton);
  mappingHeader.appendChild(mappingTitle);
  mappingHeader.appendChild(mappingActions);
  
  mappingContainer.appendChild(mappingHeader);
  
  // Add description text
  const descriptionText = document.createElement('p');
  descriptionText.className = 'mapping-description';
  descriptionText.innerHTML = 'Select source fields to import into each FileMaker target field. You can select the same source field multiple times and use transformations to split it into different target fields.';
  mappingContainer.appendChild(descriptionText);
  
  // Check for mandatory fields
  const mandatoryFields = ["Slate", "Take #", "Clip Identifier"];
  const mappedMandatoryFields = {};
  
  fieldMappings.forEach(mapping => {
    if (mandatoryFields.includes(mapping.destinationField) && mapping.sourceField) {
      mappedMandatoryFields[mapping.destinationField] = true;
    }
  });
  
  // Show warning if mandatory fields are not mapped
  const missingMandatory = mandatoryFields.filter(field => !mappedMandatoryFields[field]);
  
  if (missingMandatory.length > 0) {
    const warningBox = document.createElement('div');
    warningBox.className = 'mandatory-warning';
    
    const warningHeader = document.createElement('div');
    warningHeader.className = 'warning-header';
    
    const warningIcon = document.createElement('div');
    warningIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    `;
    
    const warningTitle = document.createElement('span');
    warningTitle.textContent = 'Please map the following mandatory fields:';
    
    warningHeader.appendChild(warningIcon);
    warningHeader.appendChild(warningTitle);
    warningBox.appendChild(warningHeader);
    
    const warningList = document.createElement('ul');
    warningList.className = 'warning-list';
    
    missingMandatory.forEach(field => {
      const listItem = document.createElement('li');
      listItem.textContent = field;
      warningList.appendChild(listItem);
    });
    
    warningBox.appendChild(warningList);
    mappingContainer.appendChild(warningBox);
  }
  
  // Create mapping table
  const table = document.createElement('table');
  table.className = 'mapping-table';
  
  // Create header row
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  const destHeader = document.createElement('th');
  destHeader.textContent = 'Target Field in FileMaker';
  headerRow.appendChild(destHeader);
  
  const matchHeader = document.createElement('th');
  matchHeader.textContent = 'Match';
  matchHeader.style.width = '80px';
  headerRow.appendChild(matchHeader);
  
  const sourceHeader = document.createElement('th');
  sourceHeader.textContent = 'Source Field';
  headerRow.appendChild(sourceHeader);
  
  const transformHeader = document.createElement('th');
  transformHeader.textContent = 'Transform';
  transformHeader.style.width = '100px';
  headerRow.appendChild(transformHeader);
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create mapping rows
  const tbody = document.createElement('tbody');
  
  // Get the list of available source fields from the current data
  const sourceFields = parsedData ? parsedData.headers : [];
  
  fieldMappings.forEach((mapping, index) => {
    const tr = document.createElement('tr');
    
    // Target field cell (static)
    const destCell = document.createElement('td');
    
    const destFieldDiv = document.createElement('div');
    destFieldDiv.className = 'field-name';
    
    // Add indicator for mandatory fields
    if (mandatoryFields.includes(mapping.destinationField)) {
      destFieldDiv.innerHTML = `${mapping.destinationField} <span class="mandatory-indicator">*</span>`;
    } else {
      destFieldDiv.textContent = mapping.destinationField;
    }
    
    destCell.appendChild(destFieldDiv);
    
    // Match indicator cell
    const matchCell = document.createElement('td');
    matchCell.className = 'match-cell';
    
    if (mapping.matchScore > 0) {
      const matchIndicator = document.createElement('div');
      matchIndicator.className = 'match-indicator';
      
      // Create dots for match level
      for (let i = 0; i < 5; i++) {
        const dot = document.createElement('span');
        dot.className = 'match-dot';
        
        // Fill dots based on match score
        // 5 dots for 1.0, 4 dots for 0.8-0.99, 3 dots for 0.6-0.79, etc.
        if (i < Math.ceil(mapping.matchScore * 5)) {
          dot.classList.add('filled');
        }
        
        matchIndicator.appendChild(dot);
      }
      
      const matchLabel = document.createElement('div');
      matchLabel.className = 'match-label';
      
      if (mapping.matchScore >= 0.9) {
        matchLabel.textContent = 'Exact';
        matchLabel.style.color = '#00A233';
      } else if (mapping.matchScore >= 0.7) {
        matchLabel.textContent = 'Strong';
        matchLabel.style.color = '#7ab317';
      } else if (mapping.matchScore >= 0.5) {
        matchLabel.textContent = 'Possible';
        matchLabel.style.color = '#fcba03';
      } else {
        matchLabel.textContent = 'Weak';
        matchLabel.style.color = '#fc7b03';
      }
      
      matchCell.appendChild(matchIndicator);
      matchCell.appendChild(matchLabel);
    }
    
    // Source field cell (selectable)
    const sourceCell = document.createElement('td');
    
    const select = document.createElement('select');
    select.className = 'mapping-select';
    select.dataset.index = index;
    
    // Add empty option
    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = '-- Do not import --';
    select.appendChild(emptyOption);
    
    // Add source field options
    sourceFields.forEach(sourceField => {
      const option = document.createElement('option');
      option.value = sourceField;
      option.textContent = sourceField;
      
      if (sourceField === mapping.sourceField) {
        option.selected = true;
      }
      
      select.appendChild(option);
    });
    
    // Highlight suggested field if not explicitly selected
    if (mapping.suggestedField && !mapping.sourceField) {
      // Create a suggestion label
      const suggestionLabel = document.createElement('div');
      suggestionLabel.className = 'suggestion-label';
      suggestionLabel.innerHTML = `Suggested: <span>${mapping.suggestedField}</span>`;
      suggestionLabel.addEventListener('click', () => {
        select.value = mapping.suggestedField;
        fieldMappings[index].sourceField = mapping.suggestedField;
        fieldMappings[index].sample = getSampleValue(parsedData, mapping.suggestedField);
        suggestionLabel.style.display = 'none';
        
        // Update UI if a mandatory field was just mapped
        if (mandatoryFields.includes(mapping.destinationField)) {
          renderFieldMappings();
        }
      });
      
      sourceCell.appendChild(suggestionLabel);
    }
    
    // Add event listener for mapping change
    select.addEventListener('change', event => {
      const index = parseInt(event.target.dataset.index);
      const previousValue = fieldMappings[index].sourceField;
      fieldMappings[index].sourceField = event.target.value;
      // Update sample when source field changes
      fieldMappings[index].sample = getSampleValue(parsedData, event.target.value);
      
      // Hide suggestion if visible
      const suggestionLabel = sourceCell.querySelector('.suggestion-label');
      if (suggestionLabel) {
        suggestionLabel.style.display = 'none';
      }
      
      // Re-render if a mandatory field was mapped or unmapped
      if (mandatoryFields.includes(fieldMappings[index].destinationField)) {
        renderFieldMappings();
      }
    });
    
    sourceCell.appendChild(select);
    
    // If the source field is selected, show a sample
    if (mapping.sourceField && mapping.sample) {
      const sampleDiv = document.createElement('div');
      sampleDiv.className = 'field-sample';
      sampleDiv.textContent = mapping.sample;
      sourceCell.appendChild(sampleDiv);
    }
    
    // Transform button cell
    const transformCell = document.createElement('td');
    
    const transformButton = document.createElement('button');
    transformButton.className = 'mapping-button';
    transformButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    `;
    
    // Only enable transform button if a source field is selected
    transformButton.disabled = !mapping.sourceField;
    
    // If this field has a transformation, highlight the button
    if (transformations[mapping.sourceField]) {
      transformButton.classList.add('active');
    }
    
    if (mapping.sourceField) {
      transformButton.addEventListener('click', () => {
        showFieldTransform(mapping.sourceField, mapping.sample);
      });
    }
    
    transformCell.appendChild(transformButton);
    
    // Add highlight class for rows with mandatory destination fields 
    if (mandatoryFields.includes(mapping.destinationField)) {
      tr.classList.add('mandatory-row');
    }
    
    tr.appendChild(destCell);
    tr.appendChild(matchCell);
    tr.appendChild(sourceCell);
    tr.appendChild(transformCell);
    tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);
  mappingContainer.appendChild(table);
  
  // Add a progress indicator
  const mappedCount = fieldMappings.filter(m => m.sourceField).length;
  const totalCount = fieldMappings.length;
  const mandatoryCount = Object.keys(mappedMandatoryFields).length;
  
  const progressContainer = document.createElement('div');
  progressContainer.className = 'mapping-progress';
  
  const progressText = document.createElement('div');
  progressText.className = 'progress-text';
  progressText.innerHTML = `
    <span class="progress-count">${mappedCount} of ${totalCount}</span> fields mapped
    ${mandatoryFields.length > 0 ? 
      `<span class="mandatory-count">${mandatoryCount} of ${mandatoryFields.length}</span> mandatory fields mapped` 
      : ''}
  `;
  
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar-container';
  
  const progressFill = document.createElement('div');
  progressFill.className = 'progress-bar-fill';
  progressFill.style.width = `${(mappedCount / totalCount) * 100}%`;
  
  progressBar.appendChild(progressFill);
  progressContainer.appendChild(progressText);
  progressContainer.appendChild(progressBar);
  
  mappingContainer.appendChild(progressContainer);
}

function autoMapFields() {
  console.log("Auto-mapping fields");
  
  fieldMappings.forEach((mapping, index) => {
    // Auto-map fields with a high match score
    if (mapping.matchScore >= 0.7 && mapping.suggestedField) {
      mapping.sourceField = mapping.suggestedField;
      mapping.sample = getSampleValue(parsedData, mapping.suggestedField);
    } else {
      // Try to find a better match
      mapping.sourceField = '';
      mapping.sample = '';
      
      // Try to find a match by name
      const destField = mapping.destinationField.toLowerCase();
      
      for (const sourceField of parsedData.headers) {
        const sourceFieldLower = sourceField.toLowerCase();
        
        // Exact match
        if (sourceFieldLower === destField) {
          mapping.sourceField = sourceField;
          mapping.sample = getSampleValue(parsedData, sourceField);
          mapping.matchScore = 1;
          mapping.suggestedField = sourceField;
          break;
        }
        
        // Contains match
        if (mapping.sourceField === '' && 
            (sourceFieldLower.includes(destField) || destField.includes(sourceFieldLower))) {
          mapping.sourceField = sourceField;
          mapping.sample = getSampleValue(parsedData, sourceField);
          mapping.matchScore = 0.7;
          mapping.suggestedField = sourceField;
        }
      }
    }
  });
  
  // Re-render the mappings
  renderFieldMappings();
  
  // Show success message
  showSuccess("Fields have been automatically mapped", mappingStep);
}

// Update mapDataFields to work with the new mapping structure
function mapDataFields(data) {
  // Map data based on field mappings
  const result = [];
  
  // Get active mappings (fields that are actually mapped)
  const activeMappings = fieldMappings.filter(mapping => mapping.sourceField);
  
  if (activeMappings.length === 0) {
    console.warn("No fields are mapped, using original data");
    return data.data;
  }
  
  data.data.forEach(row => {
    const mappedRow = {};
    
    activeMappings.forEach(mapping => {
      let value = row[mapping.sourceField] || '';
      
      // Apply transformation if one exists
      if (transformations[mapping.sourceField]) {
        value = applyTransform(value, transformations[mapping.sourceField]);
      }
      
      mappedRow[mapping.destinationField] = value;
    });
    
    result.push(mappedRow);
  });
  
  return result;
}

// Update save configuration to work with the new mapping structure
function saveMappingConfiguration() {
  // Create configuration object
  const configuration = {
    // Save field mappings
    fieldMappings: fieldMappings.filter(m => m.sourceField).map(mapping => ({
      destinationField: mapping.destinationField,
      sourceField: mapping.sourceField,
      // Do not save sample values as they will change with different data
    })),
    // Save transformations
    transformations: transformations
  };
  
  // Convert to JSON
  const configJSON = JSON.stringify(configuration);
  
  console.log("Saving mapping configuration:", configJSON);
  
  // Check if FileMaker integration is available
  if (window.FileMaker && typeof window.FileMaker.PerformScript === 'function') {
    try {
      // Send configuration to FileMaker
      window.FileMaker.PerformScript('Save Mapping Configuration', configJSON);
      showSuccess('Mapping configuration saved successfully', mappingStep);
    } catch (error) {
      console.error("FileMaker integration error:", error);
      showError('Error saving configuration: ' + error.message, mappingStep);
    }
  } else {
    // For development/testing without FileMaker
    localStorage.setItem('mappingConfiguration', configJSON);
    showSuccess('Mapping configuration saved to localStorage (dev mode)', mappingStep);
  }
}

function showTransformations() {
  // Create transformations panel
  transformationsContainer.innerHTML = '';
  transformationsContainer.style.display = 'block';
  mappingContainer.style.display = 'none';
  
  const header = document.createElement('div');
  header.className = 'mapping-header';
  
  const title = document.createElement('div');
  title.className = 'mapping-title';
  title.textContent = 'Field Transformations';
  
  const closeButton = document.createElement('button');
  closeButton.className = 'auto-map-button';
  closeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
    Close
  `;
  
  closeButton.addEventListener('click', () => {
    transformationsContainer.style.display = 'none';
    mappingContainer.style.display = 'block';
  });
  
  header.appendChild(title);
  header.appendChild(closeButton);
  transformationsContainer.appendChild(header);
  
  // Display summary of transformations
  const summary = document.createElement('div');
  summary.className = 'transform-summary';
  
  const transformCount = Object.keys(transformations).length;
  
  const summaryText = document.createElement('div');
  summaryText.innerHTML = `<p>${transformCount} field${transformCount !== 1 ? 's' : ''} have transformations applied.</p>`;
  
  if (transformCount > 0) {
    const transformList = document.createElement('ul');
    transformList.className = 'transform-list';
    
    Object.keys(transformations).forEach(field => {
      const transform = transformations[field];
      const item = document.createElement('li');
      item.innerHTML = `<strong>${field}</strong>: ${getTransformDescription(transform)}`;
      
      // Add edit and delete buttons
      const actions = document.createElement('div');
      actions.className = 'transform-actions';
      
      const editButton = document.createElement('button');
      editButton.className = 'mapping-button';
      editButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      `;
      editButton.addEventListener('click', () => {
        // Find the sample value for this field
        const mapping = fieldMappings.find(m => m.sourceField === field);
        showFieldTransform(field, mapping ? mapping.sample : '');
      });
      
      const deleteButton = document.createElement('button');
      deleteButton.className = 'mapping-button';
      deleteButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      `;
      deleteButton.addEventListener('click', () => {
        delete transformations[field];
        showTransformations(); // Refresh the view
        renderFieldMappings(); // Update the transform buttons in the main view
      });
      
      actions.appendChild(editButton);
      actions.appendChild(deleteButton);
      
      item.appendChild(actions);
      transformList.appendChild(item);
    });
    
    summary.appendChild(summaryText);
    summary.appendChild(transformList);
  } else {
    summaryText.innerHTML += '<p>Click the transform button next to any field in the mapping table to add a transformation.</p>';
    summary.appendChild(summaryText);
  }
  
  transformationsContainer.appendChild(summary);
  
  // Create back button
  const backButton = document.createElement('button');
  backButton.className = 'step-button back-button';
  backButton.style.marginTop = '1rem';
  backButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    Back to Mapping
  `;
  
  backButton.addEventListener('click', () => {
    transformationsContainer.style.display = 'none';
    mappingContainer.style.display = 'block';
  });
  
  transformationsContainer.appendChild(backButton);
}

function getTransformDescription(transform) {
  if (!transform) return 'No transformation';
  
  switch (transform.type) {
    case 'split':
      return `Split text by "${transform.parameters.delimiter}" and take item ${transform.parameters.index}`;
    case 'extract':
      return `Extract substring from position ${transform.parameters.start} to ${transform.parameters.end}`;
    case 'regex':
      return `Extract with regex: ${transform.parameters.pattern}`;
    default:
      return 'Unknown transformation';
  }
}

function showFieldTransform(field, sampleValue) {
  // Create a modal for transform configuration
  const modal = document.createElement('div');
  modal.className = 'transform-modal';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'transform-modal-content';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'transform-modal-header';
  
  const title = document.createElement('div');
  title.className = 'transform-modal-title';
  title.textContent = `Transform Field: ${field}`;
  
  const closeButton = document.createElement('button');
  closeButton.className = 'transform-modal-close';
  closeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;
  
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  header.appendChild(title);
  header.appendChild(closeButton);
  modalContent.appendChild(header);
  
  // Create form
  const form = document.createElement('div');
  form.className = 'transform-form';
  
  // Get existing transform if any
  const existingTransform = transformations[field] || { type: 'none', parameters: {} };
  
  // Transformation type
  const typeGroup = document.createElement('div');
  typeGroup.className = 'form-group';
  
  const typeLabel = document.createElement('label');
  typeLabel.className = 'form-label';
  typeLabel.textContent = 'Transformation Type';
  
  const typeSelect = document.createElement('select');
  typeSelect.className = 'transform-select';
  
  const transformTypes = [
    { value: 'none', label: 'No Transformation' },
    { value: 'split', label: 'Split Text' },
    { value: 'extract', label: 'Extract Substring' },
    { value: 'regex', label: 'Extract with Regex' }
  ];
  
  transformTypes.forEach(type => {
    const option = document.createElement('option');
    option.value = type.value;
    option.textContent = type.label;
    if (type.value === existingTransform.type) {
      option.selected = true;
    }
    typeSelect.appendChild(option);
  });
  
  typeGroup.appendChild(typeLabel);
  typeGroup.appendChild(typeSelect);
  form.appendChild(typeGroup);
  
  // Parameters container
  const parametersContainer = document.createElement('div');
  parametersContainer.className = 'transform-parameters';
  form.appendChild(parametersContainer);
  
  // Sample container
  const sampleContainer = document.createElement('div');
  sampleContainer.className = 'transform-sample';
  
  const originalSampleGroup = document.createElement('div');
  originalSampleGroup.className = 'form-group';
  
  const originalSampleLabel = document.createElement('label');
  originalSampleLabel.className = 'form-label';
  originalSampleLabel.textContent = 'Original Value';
  
  const originalSampleValue = document.createElement('div');
  originalSampleValue.className = 'sample-value';
  originalSampleValue.textContent = sampleValue || '(empty)';
  
  originalSampleGroup.appendChild(originalSampleLabel);
  originalSampleGroup.appendChild(originalSampleValue);
  sampleContainer.appendChild(originalSampleGroup);
  
  const transformedSampleGroup = document.createElement('div');
  transformedSampleGroup.className = 'form-group';
  
  const transformedSampleLabel = document.createElement('label');
  transformedSampleLabel.className = 'form-label';
  transformedSampleLabel.textContent = 'Transformed Value';
  
  const transformedSampleValue = document.createElement('div');
  transformedSampleValue.className = 'sample-value transformed';
  transformedSampleValue.textContent = applyTransform(sampleValue, existingTransform) || '(empty)';
  
  transformedSampleGroup.appendChild(transformedSampleLabel);
  transformedSampleGroup.appendChild(transformedSampleValue);
  sampleContainer.appendChild(transformedSampleGroup);
  
  form.appendChild(sampleContainer);
  
  // Function declarations for preview functionality
  function previewSplit(delimiter, index) {
    const transform = {
      type: 'split',
      parameters: { delimiter, index }
    };
    
    transformedSampleValue.textContent = applyTransform(sampleValue, transform) || '(empty)';
  }
  
  function previewExtract(start, end) {
    const transform = {
      type: 'extract',
      parameters: { start, end }
    };
    
    transformedSampleValue.textContent = applyTransform(sampleValue, transform) || '(empty)';
  }
  
  function previewRegex(pattern, group) {
    const transform = {
      type: 'regex',
      parameters: { pattern, group }
    };
    
    transformedSampleValue.textContent = applyTransform(sampleValue, transform) || '(empty)';
  }
  
  // Update parameters based on selected type
  function updateTransformParameters() {
    const selectedType = typeSelect.value;
    parametersContainer.innerHTML = '';
    
    if (selectedType === 'none') {
      // No parameters needed
      transformedSampleValue.textContent = sampleValue || '(empty)';
      return;
    }
    
    const paramValues = (existingTransform.type === selectedType) ? 
      existingTransform.parameters : {};
    
    if (selectedType === 'split') {
      // Split parameters
      const delimiterGroup = document.createElement('div');
      delimiterGroup.className = 'form-group';
      
      const delimiterLabel = document.createElement('label');
      delimiterLabel.className = 'form-label';
      delimiterLabel.textContent = 'Delimiter';
      
      const delimiterInput = document.createElement('input');
      delimiterInput.type = 'text';
      delimiterInput.className = 'transform-input';
      delimiterInput.value = paramValues.delimiter || ',';
      delimiterInput.placeholder = 'e.g. ,';
      
      delimiterGroup.appendChild(delimiterLabel);
      delimiterGroup.appendChild(delimiterInput);
      parametersContainer.appendChild(delimiterGroup);
      
      const indexGroup = document.createElement('div');
      indexGroup.className = 'form-group';
      
      const indexLabel = document.createElement('label');
      indexLabel.className = 'form-label';
      indexLabel.textContent = 'Item Index (0-based)';
      
      const indexInput = document.createElement('input');
      indexInput.type = 'number';
      indexInput.className = 'transform-input';
      indexInput.value = paramValues.index || 0;
      indexInput.min = 0;
      
      indexGroup.appendChild(indexLabel);
      indexGroup.appendChild(indexInput);
      parametersContainer.appendChild(indexGroup);
      
      // Preview transformation
      delimiterInput.addEventListener('input', () => {
        previewSplit(delimiterInput.value, parseInt(indexInput.value));
      });
      
      indexInput.addEventListener('input', () => {
        previewSplit(delimiterInput.value, parseInt(indexInput.value));
      });
      
      // Initial preview
      previewSplit(delimiterInput.value, parseInt(indexInput.value));
      
    } else if (selectedType === 'extract') {
      // Extract substring parameters
      const startGroup = document.createElement('div');
      startGroup.className = 'form-group';
      
      const startLabel = document.createElement('label');
      startLabel.className = 'form-label';
      startLabel.textContent = 'Start Position';
      
      const startInput = document.createElement('input');
      startInput.type = 'number';
      startInput.className = 'transform-input';
      startInput.value = paramValues.start || 0;
      startInput.min = 0;
      
      startGroup.appendChild(startLabel);
      startGroup.appendChild(startInput);
      parametersContainer.appendChild(startGroup);
      
      const endGroup = document.createElement('div');
      endGroup.className = 'form-group';
      
      const endLabel = document.createElement('label');
      endLabel.className = 'form-label';
      endLabel.textContent = 'End Position';
      
      const endInput = document.createElement('input');
      endInput.type = 'number';
      endInput.className = 'transform-input';
      endInput.value = paramValues.end || ((sampleValue && sampleValue.length) || 1);
      endInput.min = 0;
      
      endGroup.appendChild(endLabel);
      endGroup.appendChild(endInput);
      parametersContainer.appendChild(endGroup);
      
      // Preview transformation
      startInput.addEventListener('input', () => {
        previewExtract(parseInt(startInput.value), parseInt(endInput.value));
      });
      
      endInput.addEventListener('input', () => {
        previewExtract(parseInt(startInput.value), parseInt(endInput.value));
      });
      
      // Initial preview
      previewExtract(parseInt(startInput.value), parseInt(endInput.value));
      
    } else if (selectedType === 'regex') {
      // Regex parameters
      const patternGroup = document.createElement('div');
      patternGroup.className = 'form-group';
      
      const patternLabel = document.createElement('label');
      patternLabel.className = 'form-label';
      patternLabel.textContent = 'Regular Expression Pattern';
      
      const patternInput = document.createElement('input');
      patternInput.type = 'text';
      patternInput.className = 'transform-input';
      patternInput.value = paramValues.pattern || '(.*)';
      patternInput.placeholder = 'e.g. ([0-9]+)';
      
      patternGroup.appendChild(patternLabel);
      patternGroup.appendChild(patternInput);
      parametersContainer.appendChild(patternGroup);
      
      const groupGroup = document.createElement('div');
      groupGroup.className = 'form-group';
      
      const groupLabel = document.createElement('label');
      groupLabel.className = 'form-label';
      groupLabel.textContent = 'Capture Group (0 for full match)';
      
      const groupInput = document.createElement('input');
      groupInput.type = 'number';
      groupInput.className = 'transform-input';
      groupInput.value = paramValues.group || 1;
      groupInput.min = 0;
      
      groupGroup.appendChild(groupLabel);
      groupGroup.appendChild(groupInput);
      parametersContainer.appendChild(groupGroup);
      
      // Preview transformation
      patternInput.addEventListener('input', () => {
        previewRegex(patternInput.value, parseInt(groupInput.value));
      });
      
      groupInput.addEventListener('input', () => {
        previewRegex(patternInput.value, parseInt(groupInput.value));
      });
      
      // Initial preview
      previewRegex(patternInput.value, parseInt(groupInput.value));
    }
  }
  
  // Attach change event to transformation type select
  typeSelect.addEventListener('change', updateTransformParameters);
  
  // Initialize parameters UI
  updateTransformParameters();
  
  // Action buttons
  const actions = document.createElement('div');
  actions.className = 'transform-actions-footer';
  
  const cancelButton = document.createElement('button');
  cancelButton.className = 'transform-button cancel';
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  const applyButton = document.createElement('button');
  applyButton.className = 'transform-button apply';
  applyButton.textContent = 'Apply Transformation';
  applyButton.addEventListener('click', () => {
    const type = typeSelect.value;
    
    if (type === 'none') {
      // Remove transformation
      delete transformations[field];
    } else {
      // Get parameters based on type
      let parameters = {};
      
      if (type === 'split') {
        parameters = {
          delimiter: parametersContainer.querySelector('input[type="text"]').value,
          index: parseInt(parametersContainer.querySelector('input[type="number"]').value)
        };
      } else if (type === 'extract') {
        const inputs = parametersContainer.querySelectorAll('input[type="number"]');
        parameters = {
          start: parseInt(inputs[0].value),
          end: parseInt(inputs[1].value)
        };
      } else if (type === 'regex') {
        parameters = {
          pattern: parametersContainer.querySelector('input[type="text"]').value,
          group: parseInt(parametersContainer.querySelector('input[type="number"]').value)
        };
      }
      
      // Save transformation
      transformations[field] = {
        type,
        parameters
      };
    }
    
    // Update UI
    renderFieldMappings();
    document.body.removeChild(modal);
  });
  
  actions.appendChild(cancelButton);
  actions.appendChild(applyButton);
  
  modalContent.appendChild(form);
  modalContent.appendChild(actions);
  modal.appendChild(modalContent);
  
  document.body.appendChild(modal);
}

function applyTransform(value, transform) {
  if (!value || !transform || transform.type === 'none') {
    return value;
  }
  
  try {
    let parts;
    let match;
    let regex;
    
    switch (transform.type) {
      case 'split':
        parts = value.split(transform.parameters.delimiter);
        return parts[transform.parameters.index] || '';
        
      case 'extract':
        return value.substring(transform.parameters.start, transform.parameters.end);
        
      case 'regex':
        regex = new RegExp(transform.parameters.pattern);
        match = value.match(regex);
        
        if (!match) return '';
        
        // group 0 is the full match, group 1+ are capture groups
        return match[transform.parameters.group] || '';
        
      default:
        return value;
    }
  } catch (error) {
    console.error('Error applying transformation:', error);
    return `ERROR: ${error.message}`;
  }
}

function processImport() {
  console.log("Process import triggered");
  
  if (isProcessingZip) {
    console.error("Cannot import while ZIP processing is in progress");
    showError("Please wait until ZIP processing is complete", mappingStep);
    return;
  }
  
  if (!parsedData) {
    console.error("No parsed data available");
    showError('No data to import', mappingStep);
    return;
  }
  
  if (!parsedData.data || parsedData.data.length === 0) {
    console.error("Parsed data has no rows");
    showError('No data rows to import', mappingStep);
    return;
  }
  
  console.log("Starting import process with", parsedData.data.length, "rows");
  
  // Process field mappings
  const mappedData = mapDataFields(parsedData);
  
  // Show loading spinner
  const loadingOverlay = document.createElement('div');
  loadingOverlay.style.position = 'fixed';
  loadingOverlay.style.top = '0';
  loadingOverlay.style.left = '0';
  loadingOverlay.style.width = '100%';
  loadingOverlay.style.height = '100%';
  loadingOverlay.style.backgroundColor = '#262626';
  loadingOverlay.style.display = 'flex';
  loadingOverlay.style.flexDirection = 'column';
  loadingOverlay.style.alignItems = 'center';
  loadingOverlay.style.justifyContent = 'center';
  loadingOverlay.style.zIndex = '9999';
  
  const loadingText = document.createElement('div');
  loadingText.style.color = '#00A233';
  loadingText.style.fontSize = '1.5rem';
  loadingText.style.marginBottom = '1rem';
  loadingText.textContent = 'Importing Data...';
  loadingOverlay.appendChild(loadingText);
  
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  loadingOverlay.appendChild(spinner);
  
  document.body.appendChild(loadingOverlay);
  
  // Process the data (simulating an API call)
  setTimeout(() => {
    console.log("Import processing complete");
    document.body.removeChild(loadingOverlay);
    
    // Check if FileMaker integration is available
    if (window.FileMaker && typeof window.FileMaker.PerformScript === 'function') {
      // Pass data to FileMaker
      try {
        console.log("Sending data to FileMaker");
        
        // Create configuration object for current mappings
        const configuration = {
          fieldMappings: fieldMappings.filter(m => m.destinationField).map(mapping => ({
            sourceField: mapping.sourceField,
            destinationField: mapping.destinationField
          })),
          transformations: transformations
        };

        // Define field categories
        const fieldCategories = {
          Slate: ["Slate", "Shot", "Season", "Episode", "Scene Number", "Part", "Shoot Date", "Shoot Day #", "Shoot Location", "Units", "Plate Type"],
          Take: ["Take #", "Take Status", "Time of Take", "Time of Day"],
          Clip: ["Clip Identifier", "File Name", "File Path", "File Type", "File Size", "Duration", "Frame Rate", "Resolution", "Aspect Ratio"],
          Lens: ["Camera", "Lens", "Focal Length", "T-Stop", "ISO", "White Balance"],
          "Colour Grading": ["Look", "Colour Space", "LUT"],
          VFX: ["VFX Type", "VFX Notes", "VFX Elements"],
          Metadata: ["Created Date", "Modified Date", "Creator", "Notes", "Tags"]
        };

        // Group mapped data by categories
        const groupedData = mappedData.map(row => {
          const categorizedRow = {};
          
          // Initialize categories in the result
          Object.keys(fieldCategories).forEach(category => {
            categorizedRow[category] = {};
          });
          
          // Place each field in its category
          Object.entries(row).forEach(([field, value]) => {
            let foundCategory = "Other"; // Default category
            
            // Find which category this field belongs to
            for (const [category, fields] of Object.entries(fieldCategories)) {
              if (fields.includes(field)) {
                foundCategory = category;
                break;
              }
            }
            
            // Add field to its category
            if (foundCategory === "Other") {
              // If category doesn't exist yet, create it
              if (!categorizedRow[foundCategory]) {
                categorizedRow[foundCategory] = {};
              }
              categorizedRow[foundCategory][field] = value;
            } else {
              categorizedRow[foundCategory][field] = value;
            }
          });
          
          return categorizedRow;
        });
        
        // Prepare export data with grouped fields
        const exportData = {
          data: groupedData,
          raw: mappedData, // Include raw data as well in case it's needed
          mappings: fieldMappings.filter(m => m.destinationField), // Only include fields that are mapped
          configuration: configuration, // Include configuration for saving
          fieldCategories: fieldCategories // Include category definitions
        };
        
        window.FileMaker.PerformScript('Process Import Data', JSON.stringify(exportData));
      } catch (error) {
        console.error("FileMaker integration error:", error);
        showError('Error communicating with FileMaker: ' + error.message, mappingStep);
      }
    } else {
      // Show success message directly
      console.log("FileMaker integration not available, showing success message");
      showSuccess('Data imported successfully! ' + mappedData.length + ' records processed.', mappingStep);
      console.log('Imported data:', mappedData);
      console.log('Field mappings:', fieldMappings.filter(m => m.destinationField));
    }
    
    // Reset the import process
    setTimeout(() => {
      // Reset to step 1
      resetImport();
      goToStep(1);
    }, 2000);
  }, 1500);
}

function resetImport() {
  // Reset file input
  fileInput.value = '';
  fileInputLabel.classList.remove('active');
  fileInputLabel.querySelector('.file-input-text').textContent = 'Click or drag file to upload';
  uploadNextButton.disabled = true;
  
  // Reset state variables
  fileData = null;
  parsedData = null;
  fileName = '';
  isProcessingZip = false;
  allTables = [];
  selectedTableIndex = 0;
  fieldMappings = [];
  transformations = {};
  
  // Clear any messages
  const messages = document.querySelectorAll('.error-message, .success-message');
  messages.forEach(msg => msg.remove());
}

function showError(message, targetElement = uploadStep) {
  console.error("Error:", message);
  // Remove any existing error messages
  const existingError = targetElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Create new error message
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;
  
  // Insert at the beginning of the target element
  targetElement.insertBefore(errorMessage, targetElement.firstChild);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (errorMessage.parentNode) {
      errorMessage.parentNode.removeChild(errorMessage);
    }
  }, 5000);
}

function showSuccess(message, targetElement = uploadStep) {
  console.log("Success:", message);
  // Remove any existing messages
  const existingMessages = targetElement.querySelectorAll('.success-message, .error-message');
  existingMessages.forEach(msg => msg.remove());
  
  // Create success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = message;
  
  // Insert at the beginning of the target element
  targetElement.insertBefore(successMessage, targetElement.firstChild);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (successMessage.parentNode) {
      successMessage.parentNode.removeChild(successMessage);
    }
  }, 5000);
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded");
});

function loadMappingConfiguration(configJSON) {
  try {
    if (!configJSON) return false;
    
    console.log("Loading mapping configuration:", configJSON);
    
    // Parse the configuration
    const configuration = JSON.parse(configJSON);
    
    // Load saved field mappings
    if (configuration.fieldMappings && Array.isArray(configuration.fieldMappings)) {
      // Create a map for quick lookup
      const savedMappings = {};
      configuration.fieldMappings.forEach(mapping => {
        savedMappings[mapping.destinationField] = mapping.sourceField;
      });
      
      // Apply saved mappings to current field mappings
      fieldMappings.forEach((mapping, index) => {
        if (Object.prototype.hasOwnProperty.call(savedMappings, mapping.destinationField)) {
          mapping.sourceField = savedMappings[mapping.destinationField];
          // Update sample if we have data loaded
          if (parsedData) {
            mapping.sample = getSampleValue(parsedData, mapping.sourceField);
          }
        }
      });
    }
    
    // Load saved transformations
    if (configuration.transformations) {
      transformations = configuration.transformations;
    }
    
    // Re-render the field mappings
    renderFieldMappings();
    
    showSuccess('Mapping configuration loaded successfully', mappingStep);
    return true;
  } catch (error) {
    console.error("Error loading mapping configuration:", error);
    showError('Error loading mapping configuration: ' + error.message, mappingStep);
    return false;
  }
}

// Add event listener to handle messages from FileMaker
window.addEventListener('load', function() {
  console.log("DOM fully loaded, initializing...");
  
  // Check if the data parameter is available in the URL (for direct browser testing)
  const urlParams = new URLSearchParams(window.location.search);
  const configParam = urlParams.get('config');
  
  if (configParam) {
    try {
      // Decode from URL-safe format
      const decodedConfig = decodeURIComponent(configParam);
      loadMappingConfiguration(decodedConfig);
    } catch (error) {
      console.error("Error loading configuration from URL:", error);
    }
  }
  
  // Check localStorage for development mode
  const savedConfig = localStorage.getItem('mappingConfiguration');
  if (savedConfig && !configParam) {
    loadMappingConfiguration(savedConfig);
  }
  
  // Notify FileMaker that the page is ready to receive data
  if (window.FileMaker && typeof window.FileMaker.PerformScript === 'function') {
    try {
      window.FileMaker.PerformScript('Widget Ready', '');
    } catch (error) {
      console.error("Error signaling ready state to FileMaker:", error);
    }
  }
});