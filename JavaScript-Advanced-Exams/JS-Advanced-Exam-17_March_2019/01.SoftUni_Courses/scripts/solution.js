function solve() {
    const courseBody = $('#availableCourses .courseBody');
    const myCourse = $('#myCourses .courseBody');
    const courseFootP = $('.courseFoot p');
   
    $('.courseFoot button').on('click', signMe);
   
    function signMe() {
        const jsFundamentals = courseBody.find('input[name="js-fundamentals"]:checked').length > 0;
        const jsAdvanced = courseBody.find('input[name="js-advanced"]:checked').length > 0;
        const jsApplications = courseBody.find('input[name="js-applications"]:checked').length > 0;
        const jsWeb = courseBody.find('input[name="js-web"]:checked').length > 0;
        const onside = $('#educationForm').find('input[name="educationForm"]:first-of-type')[0];
        const courses = [];
		
        const isOnside = $(onside).is(':checked');

        myCourse.find('ul').empty();
        let sum = 0;
        if (jsFundamentals) {
            sum += 170;
            courses.push('JS-Fundamentals');
        }
		
        if (jsAdvanced) {
            let fee = 180;
            courses.push('JS-Advanced');
			
            if (jsFundamentals) {
                fee *= 0.9;
            }
            sum += fee;
        }
		
        if (jsApplications) {
            sum += 190;
            courses.push('JS-Applications');
        }
		
        if (jsFundamentals && jsAdvanced && jsApplications) {
            sum *= 0.94;
        }
		
        if (jsWeb) {
            sum += 490;
            courses.push('JS-Web');
        }
		
		
        if (jsWeb && jsFundamentals && jsAdvanced && jsApplications) {
            courses.push('HTML and CSS');
        }

        if (!isOnside) {
            sum *= 0.94;
        }
		
        myCourse.find('ul').append(courses.map(a => $(`<li>${a}</li>`)));
        courseFootP.text(`Cost: ${Math.floor(sum)}.00 BGN`);
    }
}

solve();