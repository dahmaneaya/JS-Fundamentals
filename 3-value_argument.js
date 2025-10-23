const firstArgc = ProcessingInstruction.argv[2];

if (firstArgc === undefined) {
    console.log("No argument");
} else {
    console.log(firstArgc);
}