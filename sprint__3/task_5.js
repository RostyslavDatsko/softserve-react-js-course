/* 
Please, implement a function accountPatients that takes a count of beds in a hospital and returns an array of two functions:

- the first one for adding a patient
- the second one for discharging a patient

Initially there are no patients in the hospital.
accountPatients should keep track of free beds in a hospital and every time when a patient is admitted or discharged, print the count to the console like in examples:
- A patient was admitted, 34 beds are available
- A patient was discharged, 54 beds are available

When there are no beds available, 
- Can not admit a patient, no beds available should be printed

When there is an attempt to discharge a patient when there are no patients,
- There are no patients to discharge should be printed
*/


const accountPatients = (bedsCount) => {
    let currentPatients = 0;

    return [
        function admitPatient() {
            if (currentPatients < bedsCount) {
                currentPatients++;
                console.log(`A patient was admitted, ${bedsCount - currentPatients} beds are available`);
            } else {
                console.log("Can not admit a patient, no beds available");
            }
        },
        
        function dischargePatient() {
            if (currentPatients > 0) {
                currentPatients--;
                console.log(`A patient was discharged, ${bedsCount - currentPatients} beds are available`);
            } else {
                console.log("There are no patients to discharge");
            }
        }
    ]
}