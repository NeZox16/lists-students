(() => {

    let studentsBlock = document.getElementById('students-block');
    let modalWindow = document.createElement('div');

    let btnWrapper = document.createElement('div')
    btnWrapper.classList.add('btn-warpper')
    let btnWrapperSecond = document.createElement('div')
    btnWrapperSecond.classList.add('btn-warpper-second')

    let overlay = document.createElement('div')
    let divErorrName = document.createElement('div')
    overlay.classList.add('overlay')

    let search = document.createElement('input')
    search.classList.add('search')
    search.classList.add('input-filter')
    search.type = 'search'
    
    let ul = document.createElement('ul');
    ul.classList.add('list-group')
    ul.classList.add('w-100')

    function createButtonToAddStudent() {
        let buttonToAdd = document.createElement('button');
        buttonToAdd.classList.add('btn');
        buttonToAdd.classList.add('btn-success');
        buttonToAdd.classList.add('w-25');
        buttonToAdd.classList.add('m-auto');
        buttonToAdd.textContent = 'Add student'
        buttonToAdd.addEventListener('click', () => {
            modalWindow.classList.add('active');
        })

        return buttonToAdd;
    }

    function createSort() {

        let btnSortName = document.createElement('button');
        btnSortName.classList.add('btn')
        btnSortName.classList.add('btn-primary')
        btnSortName.classList.add('btn-surname')
        btnSortName.textContent = 'surnames';

        let btnSort = document.createElement('button')
        btnSort.classList.add('btn')
        btnSort.classList.add('btn-primary')
        btnSort.classList.add('position-relative')
        btnSort.classList.add('d-flex')
        btnSort.textContent = `Sorted by:`

        btnSort.addEventListener('click', () => {
            btnWrapper.classList.toggle('active')
        })


        let btnSortFac = document.createElement('button');
        btnSortFac.classList.add('btn')
        btnSortFac.classList.add('btn-primary')
        btnSortFac.classList.add('btn-fac')
        btnSortFac.textContent = 'faculty';

        let btnSortDate = document.createElement('button');
        btnSortDate.classList.add('btn')
        btnSortDate.classList.add('btn-primary')
        btnSortDate.classList.add('btn-date')
        btnSortDate.textContent = 'date of birth';

        let btnSortYear = document.createElement('button');
        btnSortYear.classList.add('btn')
        btnSortYear.classList.add('btn-primary')
        btnSortYear.classList.add('btn-year')
        btnSortYear.textContent = 'by year';

        let btnSortStartYear = document.createElement('button');
        btnSortStartYear.classList.add('btn')
        btnSortStartYear.classList.add('btn-primary')
        btnSortStartYear.classList.add('btn-start-year')
        btnSortStartYear.textContent = 'year of commencement of training';


        return {btnSort, btnSortName, btnSortFac, btnSortDate, btnSortYear, btnSortStartYear};
    }


    function createStudentsTitle(title) {
        let h1 = document.createElement('h1');
        h1.classList.add('mt-5')
        h1.classList.add('title')
        h1.textContent = title;
        return h1;
    }

    const createStudentsForm = () => {

        let form = document.createElement('form');
        form.classList.add('form');

        let inputName = document.createElement('input');
        inputName.classList.add('form-control');
        inputName.classList.add('mb-3');
        inputName.name = 'name'
        inputName.placeholder = 'Name . . .'

        let inputSurname = document.createElement('input');
        inputSurname.classList.add('form-control');
        inputSurname.classList.add('mb-3');
        inputSurname.placeholder = 'Surname . . .'

        let inputMiddleName = document.createElement('input');
        inputMiddleName.classList.add('form-control');
        inputMiddleName.classList.add('mb-3');
        inputMiddleName.placeholder = 'Middle name . . .'

        let inputDate = document.createElement('input');
        inputDate.classList.add('mb-3');
        inputDate.type = 'date'
        inputDate.min = '1900-01-01'

        let inputFaculty = document.createElement('input');
        inputFaculty.classList.add('form-control');
        inputFaculty.classList.add('mb-3');
        inputFaculty.placeholder = 'Faculty . . .'

        let inputStudy = document.createElement('input');
        inputStudy.classList.add('mb-3');
        inputStudy.type = 'date';
        inputStudy.min = '2000-01-01'

        let inputWrapp = document.createElement('div');


        let button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.textContent = 'Add student'

        inputWrapp.append(inputName)
        inputWrapp.append(inputSurname)
        inputWrapp.append(inputMiddleName)
        inputWrapp.append(inputDate)
        inputWrapp.append(inputStudy)
        inputWrapp.append(inputFaculty)

        form.append(inputWrapp);
        form.append(button);


        return {
            form,
            inputName,
            inputSurname,
            inputMiddleName,
            inputDate,
            inputStudy,
            inputFaculty,
            button,
        }
    }
    
    
    
    function createStudentsItem(studentItem) {

        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.classList.add('d-flex');
        li.classList.add('align-items-center');
        let paragraphFullName = document.createElement('p');
        paragraphFullName.classList.add('text-fullname')
        paragraphFullName.classList.add('col-4')

        
        let paragraphDate = document.createElement('p');
        paragraphDate.classList.add('text-date')
        paragraphDate.classList.add('col-2')

        let paragraphStudyAndCourse = document.createElement('p');
        paragraphStudyAndCourse.classList.add('text-study-and-cousre')
        paragraphStudyAndCourse.classList.add('col-2')

        let paragraphFac = document.createElement('p');
        paragraphFac.classList.add('text-fac')
        paragraphFac.classList.add('col-3')

        let btnDelete = document.createElement('button');
        btnDelete.classList.add('btn')
        btnDelete.classList.add('btn-danger')
        btnDelete.classList.add('col-1')

        paragraphFullName.textContent = `${studentItem.surname} ${studentItem.name} ${studentItem.lastName} `
        paragraphDate.textContent = `${studentItem.date.day}.${studentItem.date.month}.${studentItem.date.year} (${studentItem.date.yearToday})`
        paragraphStudyAndCourse.textContent = `${studentItem.study.yearPerCourse}-${studentItem.date.yearToEnd} (${studentItem.study.course} course)`
        paragraphFac.textContent = `${studentItem.fac}`
        btnDelete.innerHTML = '&#128465;'
       

        li.append(paragraphFullName)
        li.append(paragraphFac)
        li.append(paragraphDate)
        li.append(paragraphStudyAndCourse)
        li.append(btnDelete)
        
        
        return {li, btnDelete, paragraphFullName};
    }

 

    function studentsApp(title, keys) {

        let studentsArr = JSON.parse(localStorage.getItem(keys)) || [];
        
        let buttonAdd = createButtonToAddStudent()
        
        let studetsTitle = createStudentsTitle(title);

        let arrSort = createSort();



        let studentsForm = createStudentsForm();
        
        modalWindow.classList.add('modal-window')
        overlay.addEventListener('click', () => {
            modalWindow.classList.remove('active')
            divErorrName.remove()
        })
        modalWindow.append(overlay);
        modalWindow.append(studentsForm.form)
        studentsBlock.append(modalWindow)

        studentsBlock.append(buttonAdd)
        studentsBlock.append(studetsTitle)
33
        btnWrapperSecond.append(arrSort.btnSort)
        btnWrapperSecond.append(search)
        btnWrapperSecond.append(btnWrapper)
        btnWrapper.append(arrSort.btnSortName)
        btnWrapper.append(arrSort.btnSortFac)
        btnWrapper.append(arrSort.btnSortDate)
        btnWrapper.append(arrSort.btnSortYear)
        btnWrapper.append(arrSort.btnSortStartYear)
        studentsBlock.append(btnWrapperSecond)

        studentsBlock.append(ul)

        if (localStorage.getItem(keys)) {
            let studentItemList = JSON.parse(localStorage.getItem(keys))
            for (let i = 0; i < studentItemList.length; i++) {
                let studentsItems = createStudentsItem(studentItemList[i])
                studentsItems.btnDelete.addEventListener('click', () => {
                    studentsArr.splice(i, 1);
                    localStorage.setItem(keys, JSON.stringify(studentsArr));
                    studentsItems.li.remove()
                })
                
                ul.append(studentsItems.li)
            }
            
            arrSort.btnSortName.addEventListener('click', () => {
                arrSort.btnSort.textContent = 'Sort by: surnames'
                btnWrapper.classList.remove('active')
                studentsArr.sort((a, b) => {
                    let surnameA = a.surname.toUpperCase()
                    let surnameB = b.surname.toUpperCase()
                    if (surnameA < surnameB) {
                        return -1;
                    }
                    if (surnameA > surnameB) {
                        return 1;
                    }
                    return 0
                })

                ul.innerHTML = '';

                for (let i = 0; i < studentsArr.length; i++) {
                    let studentsItems = createStudentsItem(studentsArr[i])
                    studentsItems.btnDelete.addEventListener('click', () => {
                        studentsArr.splice(i, 1);
                        localStorage.setItem(keys, JSON.stringify(studentsArr));
                        studentsItems.li.remove()
                    })
                    ul.append(studentsItems.li)
                }
            })

            arrSort.btnSortFac.addEventListener('click', () => {
                arrSort.btnSort.textContent = 'Sort by: faculty'
                btnWrapper.classList.remove('active')
                studentsArr.sort((a, b) => {
                    let facA = a.fac.toUpperCase()
                    let facB = b.fac.toUpperCase()
                    if (facA < facB) {
                        return -1;
                    }
                    if (facA > facB) {
                        return 1;
                    }
                    return 0
                })

                ul.innerHTML = '';

                for (let i = 0; i < studentsArr.length; i++) {
                    let studentsItems = createStudentsItem(studentsArr[i])
                    studentsItems.btnDelete.addEventListener('click', () => {
                        studentsArr.splice(i, 1);
                        localStorage.setItem(keys, JSON.stringify(studentsArr));
                        studentsItems.li.remove()
                    })
                    ul.append(studentsItems.li)
                }
            })

            arrSort.btnSortDate.addEventListener('click', () => {
                arrSort.btnSort.textContent = 'Sort by: date of birth'
                btnWrapper.classList.remove('active')
                studentsArr.sort((a, b) => {
                    return a.date.year - b.date.year
                    
                    })

                ul.innerHTML = '';

                for (let i = 0; i < studentsArr.length; i++) {
                    let studentsItems = createStudentsItem(studentsArr[i])
                    studentsItems.btnDelete.addEventListener('click', () => {
                        studentsArr.splice(i, 1);
                        localStorage.setItem(keys, JSON.stringify(studentsArr));
                        studentsItems.li.remove()
                    })
                    ul.append(studentsItems.li)
                }
            })

            arrSort.btnSortYear.addEventListener('click', () => {
                arrSort.btnSort.textContent = 'Sorted by: years'
                btnWrapper.classList.remove('active')
                studentsArr.sort((a, b) => {
                    return a.date.yearToday - b.date.yearToday
                    
                    })

                ul.innerHTML = '';

                for (let i = 0; i < studentsArr.length; i++) {
                    let studentsItems = createStudentsItem(studentsArr[i])
                    studentsItems.btnDelete.addEventListener('click', () => {
                        studentsArr.splice(i, 1);
                        localStorage.setItem(keys, JSON.stringify(studentsArr));
                        studentsItems.li.remove()
                    })
                    ul.append(studentsItems.li)
                }
            })

            arrSort.btnSortStartYear.addEventListener('click', () => {
                arrSort.btnSort.textContent = 'Sort by: year of start of training'
                btnWrapper.classList.remove('active')
                studentsArr.sort((a, b) => {
                    return b.study.yearPerCourse - a.study.yearPerCourse
                    
                    })

                ul.innerHTML = '';

                for (let i = 0; i < studentsArr.length; i++) {
                    let studentsItems = createStudentsItem(studentsArr[i])
                    studentsItems.btnDelete.addEventListener('click', () => {
                        studentsArr.splice(i, 1);
                        localStorage.setItem(keys, JSON.stringify(studentsArr));
                        studentsItems.li.remove()
                    })
                    ul.append(studentsItems.li)
                }
            })

            search.addEventListener('input', () => {
                const filter = search.value.toUpperCase();
                ul.innerHTML = ''

                studentItemList.filter(wq => {
                    console.log(wq);
                })

                for (let i = 0; i < studentItemList.length; i++) {
                    const peopleItem = studentItemList[i];
                    const peopleName = peopleItem.name.toUpperCase();
                    const peopleSurname = peopleItem.surname.toUpperCase();
                    const peopleMiddlename = peopleItem.lastName.toUpperCase();
                    const peopleFac = peopleItem.fac.toUpperCase();
                    const peopleStartToStudy = Number(peopleItem.study.yearPerCourse).toString();
                    const peopleEndToStudy = Number(peopleItem.date.yearToEnd).toString();
                    
                    if(peopleName.includes(filter) || peopleSurname.includes(filter) || peopleMiddlename.includes(filter) || peopleFac.includes(filter) || peopleStartToStudy.includes(filter) || peopleEndToStudy.includes(filter)) {
                        let studentsItems = createStudentsItem(studentsArr[i])
                        ul.append(studentsItems.li)
                    }
                }
            })
        }
        
        studentsForm.form.addEventListener('submit', e => {
            e.preventDefault();

            divErorrName.classList.add('error-div')
            let errorName = document.createElement('p');
            errorName.classList.add('error-name');
            errorName.textContent = 'Enter name correctly';

            let errorSurname = document.createElement('p');
            errorSurname.classList.add('error-surname');
            errorSurname.textContent = "Enter user's surname"

            let errorMiddleName = document.createElement('p');
            errorMiddleName.classList.add('error-middlename');
            errorMiddleName.textContent = 'Enter user surname'

            let errorDate = document.createElement('p');
            errorDate.classList.add('error-date');
            errorDate.textContent = 'Enter dd/mm/yyyy of the user'

            let errorStudy = document.createElement('p');
            errorStudy.classList.add('error-study');
            errorStudy.textContent = 'Enter the year the user started training'


            let errorFac = document.createElement('p');
            errorFac.classList.add('error-fac');
            errorFac.textContent = 'Enter user faculty'
            
            function validateFrom() {
                let firstName = studentsForm.inputName.value.trim();
                let secondName = studentsForm.inputSurname.value.trim();
                let thirdName = studentsForm.inputMiddleName.value.trim();
                let formDate = studentsForm.inputDate;
                let formStudy = studentsForm.inputStudy.value;
                let formFac = studentsForm.inputFaculty.value.trim();
                
                let error = false;
               
                if (!firstName || !secondName || !thirdName || !formDate || !formStudy || !formFac) {
                    studentsBlock.append(divErorrName)
                }

                if (!firstName) {
                    studentsForm.inputName.style.border = "1px solid red"
                    errorName.textContent = 'Enter user name'
                    divErorrName.append(errorName);
                    errorName.classList.add('active-error');
                    error = true;
                } else if(!isNaN(firstName)) {
                    studentsForm.inputName.style.border = "1px solid red"
                    errorName.textContent = 'Name must not contain numbers/symbols'
                    divErorrName.append(errorName);
                    errorName.classList.add('active-error');
                    error = true;
                } else {
                    errorName.classList.remove('active-error');
                    studentsForm.inputName.style.border = '1px solid green';
                }
                if (!secondName) {
                    studentsForm.inputSurname.style.border = "1px solid red";
                    divErorrName.append(errorSurname);
                    errorSurname.classList.add('active-error');
                    error = true;
                } else if(!isNaN(secondName)) {
                    studentsForm.inputSurname.style.border = "1px solid red"
                    errorSurname.textContent = 'Surname name must not contain numbers/symbols'
                    divErorrName.append(errorSurname);
                    errorSurname.classList.add('active-error');
                    error = true;
                } else {
                    errorSurname.classList.remove('active-error');
                    studentsForm.inputSurname.style.border = '1px solid green';
                }
                if (!thirdName) {
                    studentsForm.inputMiddleName.style.border = "1px solid red"
                    divErorrName.append(errorMiddleName);
                    errorMiddleName.classList.add('active-error');
                    error = true;
                } else if(!isNaN(thirdName)) {
                    studentsForm.inputMiddleName.style.border = "1px solid red"
                    errorMiddleName.textContent = 'Middle name must not contain numbers/symbols'
                    divErorrName.append(errorMiddleName);
                    errorMiddleName.classList.add('active-error');
                    error = true;
                } else {
                    errorMiddleName.classList.remove('active-error');
                    studentsForm.inputMiddleName.style.border = '1px solid green';
                }
                if (!studentsForm.inputDate.value) {
                    studentsForm.inputDate.style.border = "1px solid red"
                    divErorrName.append(errorDate);
                    errorDate.classList.add('active-error');
                    error = true;
                } else {
                    errorDate.classList.remove('active-error');
                    studentsForm.inputDate.style.border = '1px solid green';
                }
                if (!formStudy) {
                    studentsForm.inputStudy.style.border = "1px solid red"
                    divErorrName.append(errorStudy);
                    errorStudy.classList.add('active-error');
                    error = true;
                } else {
                    errorStudy.classList.remove('active-error');
                    studentsForm.inputStudy.style.border = '1px solid green';
                }
                

                if (!formFac) {
                    studentsForm.inputFaculty.style.border = "1px solid red"
                    divErorrName.append(errorFac);
                    errorFac.classList.add('active-error');
                    error = true;
                } else if(!isNaN(formFac)) {
                    studentsForm.inputFaculty.style.border = "1px solid red"
                    errorFac.textContent = 'Faculty must not contain numbers/symbols'
                    divErorrName.append(errorFac);
                    errorFac.classList.add('active-error');
                    error = true;
                } else {
                    errorFac.classList.remove('active-error');
                    studentsForm.inputFaculty.style.border = '1px solid green';
                }
                
                return !error;
            }

            if(!validateFrom()) {
                return;
            }
            

            let objStudents = {
                name: studentsForm.inputName.value.trim(), 
                surname: studentsForm.inputSurname.value.trim(),
                lastName: studentsForm.inputMiddleName.value.trim(),
                date: {
                    day: null,
                    month: null,
                    year: null,
                    yearToday: null,
                    yearToEnd: null,
                },
                study : {
                    yearPerCourse: null,
                    course: null,
                },
                fac: studentsForm.inputFaculty.value.trim(),
            }

    

            function formatEducationYears(start, end) {
                let currentYear = new Date().getFullYear()
                objStudents.date.yearPerCourse = start;
                objStudents.date.yearToEnd = end;
                if (end < currentYear || (end === currentYear && new Date().getMonth() >= 8)) {
                    objStudents.date.yearToday = start;
                    objStudents.date.yearToEnd = end;
                    objStudents.study.course = 'Finished';
                } else {
                    courses = currentYear - start
                    if (courses > 4) {
                        objStudents.study.course = 'Finished';
                    } else if (courses < 1) {
                        objStudents.study.course = "Hasn't started yet"
                    } else {
                        objStudents.study.course = courses;
                    }
                }

            }
            
            let courses = 0; 
            const startYear = new Date(studentsForm.inputStudy.value.trim()).getFullYear();
            const endYear = startYear + 4

            formatEducationYears(startYear, endYear)

    



            if (studentsForm.inputDate.value) {
                let studyLimit = new Date(studentsForm.inputStudy.value);
                
                let sekectedDate = new Date(studentsForm.inputDate.value);
                let yearDate = sekectedDate.getFullYear();
                let monthDate = sekectedDate.getMonth() + 1;
                let dayDate = sekectedDate.getDay();

                objStudents.study.yearPerCourse = studyLimit.getFullYear();

                let yearMinus = studyLimit.getFullYear() - yearDate;
                if (yearMinus >= 100 || yearMinus < 18) {
                    studentsForm.inputDate.style.border = "1px solid red"
                    studentsForm.inputStudy.style.border = "1px solid red"
                    return
                } 

                objStudents.date.day = dayDate;
                objStudents.date.month = monthDate;
                objStudents.date.year = yearDate;
                objStudents.date.yearToday = yearMinus;

                
            }


            modalWindow.classList.remove('active')
            divErorrName.remove()
            studentsForm.inputName.style.border = 'var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)';
            studentsForm.inputSurname.style.border = 'var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)';
            studentsForm.inputMiddleName.style.border = 'var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)';
            studentsForm.inputDate.style.border = 'var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)';
            studentsForm.inputStudy.style.border = 'var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)';
            studentsForm.inputFaculty.style.border = 'var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)';

            studentsArr.push(objStudents)
            localStorage.setItem(keys, JSON.stringify(studentsArr));

            let studentItemsList = createStudentsItem(objStudents);
            ul.append(studentItemsList.li)

            studentsForm.form.reset()
        })
    }

    window.studentsApp = studentsApp;
})();
