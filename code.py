import os
from pathlib import Path
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Define the list of directories containing your project
project_dirs = [
    'app',                 # Includes 'app/(tabs)' and other components
    'assets',              # In case there are any relevant files here
    'components',          # For React components
    'constants',           # Constants used across the project
    'hooks',               # Custom hooks
    'services',            # Services like Firebase and others
    'styles',              # Styling files if present
    'scripts',             # Additional scripts
    # Add other directories as needed
]

# Define the output file
output_file = Path('output.txt')

# Open the output file in write mode
with output_file.open('w') as outfile:
    # Walk through each project directory
    for project_dir in project_dirs:
        project_path = Path(project_dir)
        for root, dirs, files in os.walk(project_path):
            for file in files:
                # Only process source code files (e.g., .tsx, .ts, .js, .jsx, .css, .json, .py)
                if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json', '.py')):
                    file_path = Path(root) / file
                    try:
                        with file_path.open('r') as infile:
                            # Write a header with the full file path
                            outfile.write(f'// Filename: {file_path}\n')
                            outfile.write(infile.read())
                            outfile.write('\n\n')
                        logging.info(f'Processed file: {file_path}')
                    except Exception as e:
                        logging.error(f'Error processing file {file_path}: {e}')
