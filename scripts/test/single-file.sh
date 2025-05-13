#!/bin/bash

# Function to run a single test file based on the provided pattern
run_single_test() {
    if [ -z "$1" ]; then
        echo "Usage: $0 <test-pattern>"
        exit 1
    fi

    TEST_PATTERN=$1
    echo "Running tests matching pattern: $TEST_PATTERN"

    # Run the test using the pattern
    npx jest --testPathPattern="$TEST_PATTERN"
}

# Call the function with the first argument passed to the script
run_single_test "$1"