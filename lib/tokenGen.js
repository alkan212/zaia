var rand = function() {
    return Math.random().toString(36).substr(2);
};

export const tokenGen = function() {
    return rand() + rand() + rand(); 
};