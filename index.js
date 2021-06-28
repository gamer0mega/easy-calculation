module.exports.replaceAll = function replaceAll(text, toreplace, replacement) {
    try {
        // Prevent Process Crashing
        if (toreplace === replacement) return text;
        if (!toreplace || !text) return text;
        if (typeof(toreplace) != 'string' || typeof(replacement) != 'string' || (typeof(text) != 'string' && typeof(text) != 'number')) return 'All Values should be typeof string';
        try {
            // Prevent Process Crashing
            if (replacement.includes(toreplace)) return null;
        } catch {
            // Includes Function Can Return Errors Sometimes
        }
        // Replace The Text using while function
        replaceresult = text;
        while (replaceresult.includes(toreplace)) replaceresult = replaceresult.replace(toreplace, replacement);
        return replaceresult;
    } catch {
        // Includes Function Can Return Errors Sometimes
        return text;
    }
}
module.exports.howMany = function howMany(text, what) {
    //Prevent Errors
    if (!what || !text) return undefined;
    if (typeof(what) != 'string' || typeof(text) != 'string') return undefined;
    try {
        // Define Variables to Use Later
        howmanycount = 0;
        howmanytext = text;
        // Count The Text using while function
        while (howmanytext.includes(what)) {
            howmanytext = howmanytext.replace(what, '');
            howmanycount++;
        }
        return howmanycount;
    } catch {
        // Includes Function Can Return Errors Sometimes
        return 0;
    }
}
module.exports.calculate = function calculate(calculation, userfriendly) {
    try {
        if (!calculation) return userfriendly ? 'No Calculation Provided' : NaN;
        // Define Variables
        calculatecheck = calculation;
        tocalculate = calculation;
        calculateresult = '';
        // Add Support for more Signs
        calculatecheck = this.replaceAll(calculatecheck, ':', '/');
        calculatecheck = this.replaceAll(calculatecheck, 'x', '*');
        calculatecheck = this.replaceAll(calculatecheck, 'X', '*');
        calculatecheck = this.replaceAll(calculatecheck, '×', '*');
        calculatecheck = this.replaceAll(calculatecheck, '÷', '/');
        calculatecheck = this.replaceAll(calculatecheck, '∞', 'Infinity');
        // Remove All Signs to Check if the Calculation is valid
        calculatecheck = this.replaceAll(calculatecheck, '/', '');
        calculatecheck = this.replaceAll(calculatecheck, '*', '');
        calculatecheck = this.replaceAll(calculatecheck, '<', '');
        calculatecheck = this.replaceAll(calculatecheck, '>', '');
        calculatecheck = this.replaceAll(calculatecheck, 'pi', '');
        calculatecheck = this.replaceAll(calculatecheck, 'Pi', '');
        calculatecheck = this.replaceAll(calculatecheck, 'pI', '');
        calculatecheck = this.replaceAll(calculatecheck, 'PI', '');
        calculatecheck = this.replaceAll(calculatecheck, 'π', '');
        calculatecheck = this.replaceAll(calculatecheck, '(', '');
        calculatecheck = this.replaceAll(calculatecheck, ')', '');
        calculatecheck = this.replaceAll(calculatecheck, '^', '');
        calculatecheck = this.replaceAll(calculatecheck, '-', '');
        calculatecheck = this.replaceAll(calculatecheck, '+', '');
        // Check if The Calculation is valid
        if(!isNaN(calculatecheck)) {
            // Replace PI and Values
            tocalculate = this.replaceAll(tocalculate, 'PI', 'pi');
            tocalculate = this.replaceAll(tocalculate, 'pi', 'Math.PI');
            tocalculate = this.replaceAll(tocalculate, 'Pi', 'Math.PI');
            tocalculate = this.replaceAll(tocalculate, 'pI', 'Math.PI');
            tocalculate = this.replaceAll(tocalculate, 'π', 'Math.PI');
            // Calculate Using eval
            calculateresult = eval(tocalculate);
            // Make Values User-Friendly
            if(isNaN(calculateresult)) calculateresult = userfriendly ? 'Invalid Calculation' : NaN;
            if(calculateresult === true) calculateresult = userfriendly ? 'True' : true;
            if(calculateresult === false) calculateresult = userfriendly ? 'False' : false;
            if(calculateresult === Infinity) calculateresult = userfriendly ? 'Too Big to Display' : Infinity;
            return calculateresult;
        } else {
            return userfriendly ? 'Invalid Calculation' : NaN;
        }


    } catch {
        // If The Calculation is Invalid
        return userfriendly ? 'Invalid Calculation' : NaN;
    }
}