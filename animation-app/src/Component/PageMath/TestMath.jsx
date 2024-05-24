import s from '../../Style/MathPageStyle/Math.module.scss'
import React, { useState, useEffect } from 'react';
import Checkbox from '../CheckBox';
import classNames from 'classnames';
import anime from 'animejs';


const TestMath = () => {

    const [showResults, setShowResults] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const test = {
        one: "1.Вкажіть парну функцію:",
        two: "2.Вкажіть функцію з рисунку:",
        three: "3.Яка з наведених графіків є",

    }
    const [selectedOptions, setSelectedOptions] = useState({
        test1: null,
        test2: null,
        test3: null,
    });

    const correctAnswers = {
        test1: 'checkbox3-test1',
        test2: 'checkbox2-test2',
        test3: 'checkbox3-test3',
    };


    useEffect(() => {
        if (showResults) {
            const tests = ['test1', 'test2', 'test3'];
            tests.forEach(testKey => {
                const isCorrect = selectedOptions[testKey] === correctAnswers[testKey];
                anime({
                    targets: `.${s[testKey]}`,
                    backgroundColor: isCorrect ? '#98C194' : '#DD7474',
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        anime({
                            targets: `.${s[testKey]}`,
                            backgroundColor: '#FFFFFF',
                            duration: 1000,
                            easing: 'easeInOutQuad'
                        });
                    }
                });
            });
        }
    }, [showResults, selectedOptions, correctAnswers]);

    const handleCheckboxChange = (id, test) => {
        setSelectedOptions({
            ...selectedOptions,
            [test]: id,
        });
    };



    const handlePrintResults = () => {
        // Проходимо по кожному тесту і визначаємо, чи правильна відповідь була обрана
        for (const test in selectedOptions) {
            const selectedOption = selectedOptions[test];
            const correctAnswer = correctAnswers[test];

            // Перевіряємо, чи обрана відповідь є правильною
            const isCorrect = selectedOption === correctAnswer;

            // Виводимо інформацію про правильність вибраної відповіді для поточного тесту
            console.log(`Test ${test}: ${isCorrect ? 'Correct' : 'Incorrect'}`);
            setShowResults(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    return (
        <div className={s.test_box}>
            <div className={classNames(s.first_test, s.test1, {
                [s.correctBorder1]: showResults && selectedOptions.test1 === correctAnswers.test1,
                [s.incorrectBorder1]: showResults && selectedOptions.test1 !== correctAnswers.test1
            })}>

                <div className={s.head_one}>
                    <p>{test.one}</p></div>
                <div className={s.check_container}>
                    <Checkbox
                        id="checkbox1-test1"
                        isChecked={selectedOptions.test1 === 'checkbox1-test1'}
                        onChange={(id) => handleCheckboxChange(id, 'test1')}
                        label="A. 5/x"
                    />

                    <Checkbox
                        id="checkbox2-test1"
                        isChecked={selectedOptions.test1 === 'checkbox2-test1'}
                        onChange={(id) => handleCheckboxChange(id, 'test1')}
                        label="B. x"
                    />
                    <Checkbox
                        id="checkbox3-test1"
                        isChecked={selectedOptions.test1 === 'checkbox3-test1'}
                        onChange={(id) => handleCheckboxChange(id, 'test1')}
                        label="C. |x|"
                    />
                    <Checkbox
                        id="checkbox4-test1"
                        isChecked={selectedOptions.test1 === 'checkbox4-test1'}
                        onChange={(id) => handleCheckboxChange(id, 'test1')}
                        label="D. cos(П/2-x)"
                    />
                </div>

            </div>
            <div className={classNames(s.two_test, s.test2, {
                [s.correctBorder2]: showResults && selectedOptions.test2 === correctAnswers.test2,
                [s.incorrectBorder2]: showResults && selectedOptions.test2 !== correctAnswers.test2
            })}>
                <div className={s.head_one}><p>{test.two}</p></div>

                <div className={s.img_test}>
                    <div className={s.img_graf}>
                        <svg width="347" height="376" viewBox="0 0 347 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M347 150.4C347 151.196 346.239 151.855 345.321 151.855H175.179V299.344C175.179 300.14 174.418 300.8 173.5 300.8C172.582 300.8 171.821 300.14 171.821 299.344V151.855H1.67903C0.761161 151.855 0 151.196 0 150.4C0 149.604 0.761161 148.944 1.67903 148.944H171.821V1.45548C171.821 0.659819 172.56 0 173.5 0C174.44 0 175.179 0.659819 175.179 1.45548V148.944H345.321C346.239 148.944 347 149.604 347 150.4ZM335.829 144.733C310.8 144.733 231.706 142.87 204.349 119.893C178 97.7697 177.754 10.7706 177.776 7.08335C177.776 5.47262 179.276 4.17239 181.134 4.17239C182.992 4.17239 184.492 5.47262 184.492 7.08335C184.492 7.95664 184.716 95.3051 209.028 115.721C239.005 140.871 342.187 138.873 343.217 138.853C345.097 138.737 346.619 140.076 346.664 141.686C346.709 143.297 345.254 144.636 343.396 144.675C342.769 144.675 340.082 144.753 335.851 144.753L335.829 144.733ZM11.9547 156.067C36.9835 156.067 116.077 157.93 143.434 180.907C169.784 203.03 170.03 290.029 170.008 293.717C170.008 295.327 168.508 296.628 166.65 296.628C164.791 296.628 163.291 295.327 163.291 293.717C163.291 292.843 163.068 205.495 138.755 185.079C108.779 159.929 5.59677 161.927 4.56697 161.947C2.68645 162.063 1.16413 160.724 1.11935 159.113C1.07458 157.503 2.52974 156.164 4.38787 156.125C5.01471 156.125 7.70116 156.047 11.9323 156.047L11.9547 156.067Z" fill="black" />
                        </svg></div>

                    <div className={s.check_container2}>
                        <Checkbox
                            id="checkbox1-test2"
                            isChecked={selectedOptions.test2 === 'checkbox1-test2'}
                            onChange={(id) => handleCheckboxChange(id, 'test2')}
                            label="A."
                        />
                        <div className={s.var_check1}><svg width="54" height="86" viewBox="0 0 54 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.712 26.608C42.952 26.608 44.712 27.136 45.992 28.192C47.272 29.248 47.912 30.736 47.912 32.656C47.912 33.968 47.56 35.248 46.856 36.496C46.184 37.712 45.352 38.832 44.36 39.856C43.4 40.88 42.12 42.112 40.52 43.552C39.208 44.768 38.232 45.696 37.592 46.336C36.952 46.944 36.376 47.6 35.864 48.304H45.608C46.472 48.304 47.112 48.24 47.528 48.112C47.976 47.952 48.28 47.712 48.44 47.392C48.6 47.04 48.728 46.528 48.824 45.856H49.64C49.64 48.8 49.704 50.928 49.832 52.24C49.128 52.08 46.744 52 42.68 52H31.448V51.184C31.992 50.608 32.92 49.696 34.232 48.448C36.056 46.752 37.576 45.232 38.792 43.888C40.008 42.512 41.048 40.96 41.912 39.232C42.808 37.504 43.256 35.664 43.256 33.712C43.256 30.256 41.656 28.528 38.456 28.528C35.832 28.528 33.688 30.032 32.024 33.04L31.256 32.608C32.088 30.88 33.272 29.456 34.808 28.336C36.344 27.184 38.312 26.608 40.712 26.608Z" fill="black" />
                            <path d="M25.92 70.592C26.528 71.456 27.04 72.048 27.456 72.368C27.872 72.688 28.352 72.896 28.896 72.992V74C27.456 73.904 26.16 73.856 25.008 73.856C23.088 73.856 20.832 73.904 18.24 74V72.992C19.296 72.992 20.064 72.928 20.544 72.8C21.024 72.672 21.264 72.464 21.264 72.176C21.264 71.984 21.136 71.712 20.88 71.36L13.392 61.088L7.344 69.008C6.8 69.744 6.528 70.448 6.528 71.12C6.528 71.696 6.768 72.16 7.248 72.512C7.728 72.864 8.448 73.04 9.408 73.04V74C7.584 73.904 5.776 73.856 3.984 73.856C3.632 73.856 3.04 73.888 2.208 73.952L0.768 74V73.04C1.44 72.976 2.208 72.64 3.072 72.032C3.968 71.392 4.72 70.656 5.328 69.824L12.72 60.176L4.032 48.224C3.328 47.264 2.8 46.64 2.448 46.352C2.096 46.032 1.632 45.856 1.056 45.824V44.816C2.496 44.912 3.792 44.96 4.944 44.96C6.864 44.96 9.12 44.912 11.712 44.816V45.824C10.656 45.824 9.888 45.888 9.408 46.016C8.928 46.144 8.688 46.352 8.688 46.64C8.688 46.832 8.816 47.104 9.072 47.456L16.08 57.056L21.696 49.76C22.24 49.056 22.512 48.384 22.512 47.744C22.512 47.168 22.256 46.704 21.744 46.352C21.232 45.968 20.48 45.776 19.488 45.776V44.816C21.312 44.912 23.12 44.96 24.912 44.96C26.288 44.96 27.36 44.912 28.128 44.816V45.776C27.424 45.84 26.656 46.16 25.824 46.736C25.024 47.312 24.256 48.08 23.52 49.04L16.656 57.92L25.92 70.592Z" fill="black" />
                        </svg></div>
                        <Checkbox
                            id="checkbox2-test2"
                            isChecked={selectedOptions.test2 === 'checkbox2-test2'}
                            onChange={(id) => handleCheckboxChange(id, 'test2')}
                            label="B. 6/x"
                        />
                        <Checkbox
                            id="checkbox3-test2"
                            isChecked={selectedOptions.test2 === 'checkbox3-test2'}
                            onChange={(id) => handleCheckboxChange(id, 'test2')}
                            label="C. |x|"
                        />
                        <Checkbox
                            id="checkbox4-test2"
                            isChecked={selectedOptions.test2 === 'checkbox4-test2'}
                            onChange={(id) => handleCheckboxChange(id, 'test2')}
                            label="D. sin(x)"
                        />
                    </div>
                </div>



            </div>
            <div className={classNames(s.three_test, s.test3, {
                [s.correctBorder3]: showResults && selectedOptions.test3 === correctAnswers.test3,
                [s.incorrectBorder3]: showResults && selectedOptions.test3 !== correctAnswers.test3
            })}>
                <div className={s.head_three}><p>{test.three}</p></div>
                <div className={s.qw_three}>
                    <svg width="154" height="71" viewBox="0 0 154 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.624 25.16C27.064 25.16 28.264 25.112 29.224 25.016V25.976C28.584 26.136 27.96 26.552 27.352 27.224C26.744 27.864 26.088 28.872 25.384 30.248L17.848 45.176V53.912C17.848 55.128 17.944 56.008 18.136 56.552C18.328 57.096 18.68 57.464 19.192 57.656C19.736 57.848 20.584 57.976 21.736 58.04V59C20.264 58.904 18.232 58.856 15.64 58.856C12.888 58.856 10.84 58.904 9.496 59V58.04C10.648 57.976 11.48 57.848 11.992 57.656C12.536 57.464 12.904 57.096 13.096 56.552C13.288 56.008 13.384 55.128 13.384 53.912V46.712L3.64 28.712C3.064 27.656 2.552 26.952 2.104 26.6C1.688 26.216 1.272 26.024 0.856 26.024V25.016C2.104 25.112 3.512 25.16 5.08 25.16C8.184 25.16 10.424 25.112 11.8 25.016V26.024C9.56 26.024 8.44 26.632 8.44 27.848C8.44 28.328 8.6 28.888 8.92 29.528L16.888 44.84L23.032 32.648C23.896 30.952 24.328 29.576 24.328 28.52C24.328 27.624 23.976 26.984 23.272 26.6C22.568 26.216 21.512 26.008 20.104 25.976V25.016C21.928 25.112 23.768 25.16 25.624 25.16ZM56.9114 39.32H32.8634V37.88H56.9114V39.32ZM56.9114 46.04H32.8634V44.6H56.9114V46.04Z" fill="black" />
                        <path d="M71 27.438L89.5 59L102.5 2H154" stroke="black" strokeWidth="3" />
                        <path d="M138.92 55.592C139.528 56.456 140.04 57.048 140.456 57.368C140.872 57.688 141.352 57.896 141.896 57.992V59C140.456 58.904 139.16 58.856 138.008 58.856C136.088 58.856 133.832 58.904 131.24 59V57.992C132.296 57.992 133.064 57.928 133.544 57.8C134.024 57.672 134.264 57.464 134.264 57.176C134.264 56.984 134.136 56.712 133.88 56.36L126.392 46.088L120.344 54.008C119.8 54.744 119.528 55.448 119.528 56.12C119.528 56.696 119.768 57.16 120.248 57.512C120.728 57.864 121.448 58.04 122.408 58.04V59C120.584 58.904 118.776 58.856 116.984 58.856C116.632 58.856 116.04 58.888 115.208 58.952L113.768 59V58.04C114.44 57.976 115.208 57.64 116.072 57.032C116.968 56.392 117.72 55.656 118.328 54.824L125.72 45.176L117.032 33.224C116.328 32.264 115.8 31.64 115.448 31.352C115.096 31.032 114.632 30.856 114.056 30.824V29.816C115.496 29.912 116.792 29.96 117.944 29.96C119.864 29.96 122.12 29.912 124.712 29.816V30.824C123.656 30.824 122.888 30.888 122.408 31.016C121.928 31.144 121.688 31.352 121.688 31.64C121.688 31.832 121.816 32.104 122.072 32.456L129.08 42.056L134.696 34.76C135.24 34.056 135.512 33.384 135.512 32.744C135.512 32.168 135.256 31.704 134.744 31.352C134.232 30.968 133.48 30.776 132.488 30.776V29.816C134.312 29.912 136.12 29.96 137.912 29.96C139.288 29.96 140.36 29.912 141.128 29.816V30.776C140.424 30.84 139.656 31.16 138.824 31.736C138.024 32.312 137.256 33.08 136.52 34.04L129.656 42.92L138.92 55.592Z" fill="black" />
                    </svg></div>
                <div className={s.check_container3}>
                    <div className={s.cont_variant}>


                        <Checkbox
                            id="checkbox1-test3"
                            isChecked={selectedOptions.test3 === 'checkbox1-test3'}
                            onChange={(id) => handleCheckboxChange(id, 'test3')}
                            label="A."
                        />

                        <Checkbox
                            id="checkbox2-test3"
                            isChecked={selectedOptions.test3 === 'checkbox2-test3'}
                            onChange={(id) => handleCheckboxChange(id, 'test3')}
                            label="B."
                        />

                        <Checkbox
                            id="checkbox3-test3"
                            isChecked={selectedOptions.test3 === 'checkbox3-test3'}
                            onChange={(id) => handleCheckboxChange(id, 'test3')}
                            label="C."
                        />
                    </div>
                    <div className={s.container_graf}>


                        <div className={s.graf_one}>
                            <svg width="351" height="340" viewBox="0 0 351 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M333.45 135.32H17.5498V136.68H333.45V135.32Z" fill="black" />
                                <path d="M176.378 13.6H174.623V258.4H176.378V13.6Z" fill="black" />
                                <path d="M244.77 13.6C244.752 13.736 244.731 13.872 244.714 14.008C244.563 15.1449 243.962 16.2928 243.59 17.3971C243.404 17.9384 243.246 18.4715 243.162 19.0264C243.12 19.3147 243.137 19.6792 243.022 19.9566C242.92 20.1933 242.604 20.3891 242.523 20.7155C241.351 25.587 239.649 30.3606 238.209 35.1886C237.518 37.5061 236.928 40.0302 235.907 42.2416C235.672 42.7584 235.598 43.3649 235.437 43.9008C235.244 44.5318 234.801 45.0105 234.531 45.6171C234.012 46.7976 233.997 48.0977 233.632 49.3081C233.31 50.3825 232.779 51.4841 232.337 52.5395C231.86 53.6792 231.565 54.8025 231.204 55.9667C230.459 58.3385 229.361 60.6342 228.494 62.9789C226.788 67.6165 224.966 72.1452 223.008 76.7094C220.996 81.3851 219.147 85.9873 216.823 90.5923C216.24 91.7429 215.707 92.9097 215.114 94.0576C214.584 95.0884 214.212 96.2526 213.608 97.2427C213.257 97.8139 212.804 98.2518 212.502 98.8584C212.214 99.4296 212.179 100.123 211.835 100.667C211.516 101.173 210.996 101.608 210.663 102.122C210.273 102.729 210.045 103.335 209.719 103.964C207.251 108.705 203.706 113.095 200.523 117.553C199.838 118.516 199.031 119.528 198.164 120.395C197.676 120.882 197.188 121.358 196.693 121.837C196.258 122.256 196.118 122.933 195.637 123.289C192.927 125.324 190.21 127.353 187.497 129.382C186.412 130.19 185.331 131.003 184.25 131.811C183.246 132.559 181.449 132.964 180.161 133.315C178.487 133.772 177.072 133.729 175.282 133.729C173.804 133.729 172.471 133.321 171.046 133.032C169.764 132.771 168.841 132.056 167.799 131.433C165.953 130.323 164.103 129.214 162.257 128.107C159.975 126.736 157.964 125.085 156.24 123.308C154.331 121.342 152.587 119.286 150.863 117.213C150.428 116.693 150.073 116.16 149.715 115.603C149.361 115.056 148.862 114.626 148.634 114.071C148.438 113.593 147.651 112.981 147.286 112.551C146.876 112.061 146.63 111.321 146.307 110.788C144.984 108.607 142.945 106.493 142.092 104.157C141.625 102.892 140.835 101.864 140 100.751C139.694 100.346 139.631 99.7668 139.371 99.3208C138.989 98.6571 138.599 97.9961 138.203 97.3379C137.918 96.8646 137.82 96.3641 137.532 95.8881C137.297 95.5019 136.493 94.7485 136.416 94.3486C136.17 93.0757 135.272 92.0448 134.847 90.8153C134.429 89.5913 133.794 88.419 133.246 87.2222C132.745 86.1342 132.141 85.0326 131.684 83.9364C130.677 81.5184 129.526 79.1275 128.606 76.6931C127.725 74.3566 126.613 72.2459 125.746 69.9638C124.847 67.5974 123.717 65.2555 122.976 62.8564C122.597 61.6325 122.011 60.5037 121.555 59.296C121.077 58.0149 120.856 56.867 120.112 55.6593C119.512 54.6856 119.392 53.2032 118.975 52.1397C118.497 50.9238 118.083 49.7243 117.743 48.4785C117.121 46.1937 116.076 43.8681 115.377 41.6785C113.833 36.8179 112.271 31.9573 110.747 27.1157C110.386 25.9678 110.101 24.7792 109.677 23.6232C109.242 22.4454 109.038 21.3302 108.74 20.147C108.585 19.535 108.406 19.059 108.118 18.4905C107.834 17.9384 107.862 17.4134 107.743 16.8341C107.518 15.7733 106.992 14.688 106.63 13.6H103.046C103.306 14.4269 103.59 15.2456 103.78 16.0942C104.057 17.3182 104.145 18.6374 104.591 19.8261C105.437 22.0891 106.479 24.3685 106.883 26.7049C107.318 29.2237 108.494 31.6417 109.217 34.1414C109.898 36.4779 110.596 38.8361 111.383 41.1481C113.025 45.9625 114.787 50.7579 116.469 55.5669C117.293 57.9142 117.995 60.2697 119.006 62.5817C119.512 63.7323 119.919 64.8339 120.358 65.9926C120.772 67.0969 120.909 68.6337 121.663 69.5449C122.092 70.059 121.976 70.6901 122.404 71.2313C122.755 71.6693 122.769 72.3928 122.99 72.896C123.478 74.0057 123.85 75.1373 124.331 76.2443C125.381 78.6651 126.444 81.0206 127.515 83.4333C128.532 85.7153 129.315 88.1361 130.603 90.3856C131.811 92.4827 132.734 94.743 133.787 96.8809C136.051 101.478 138.775 106.05 141.618 110.446C143.113 112.76 144.749 114.991 146.339 117.262C147.781 119.324 149.389 121.192 151.105 123.191C153.032 125.427 155.244 127.233 157.694 129.132C160.14 131.022 162.534 132.733 165.559 134.052C167.96 135.086 170.961 136 173.734 136C175.777 136 177.816 136 179.859 136C181.235 136 182.776 135.336 183.998 134.912C185.335 134.455 187.153 134.009 188.276 133.275C189.691 132.344 190.979 131.303 192.302 130.299C194.57 128.566 196.953 126.809 198.89 124.853C200.765 122.963 202.436 120.752 203.994 118.682C205.609 116.541 207.209 114.376 208.62 112.148C211.593 107.473 214.208 102.713 216.956 97.9608C217.571 96.8972 217.83 95.7494 218.596 94.7512C219.343 93.7856 219.698 92.3956 220.214 91.2832C220.698 90.2332 221.098 89.1779 221.555 88.1198C222.109 86.8333 222.906 85.5249 223.295 84.2248C223.639 83.0824 224.394 82.0161 224.854 80.9064C225.338 79.7422 225.686 78.5699 226.23 77.4193C227.332 75.0638 228.266 72.6756 229.291 70.2984C229.743 69.243 230.344 68.0517 230.586 66.9609C230.888 65.6009 231.354 64.5483 232.004 63.2808C232.565 62.1846 232.994 60.8763 233.285 59.723C233.436 59.1137 233.703 58.6758 233.952 58.1808C234.247 57.5933 234.303 56.8017 234.517 56.1816C234.917 55.0201 235.447 53.8941 235.865 52.7381C236.286 51.5766 236.5 50.3798 236.932 49.2129C237.816 46.8139 238.701 44.4937 239.403 42.0539C240.077 39.7174 240.989 37.4272 241.677 35.088C242.393 32.6509 243.576 30.2056 244.036 27.7385C244.482 25.3395 245.423 23.0493 246.188 20.7128C246.637 19.3419 246.967 17.971 247.297 16.5838C247.539 15.5829 248.041 14.6064 248.188 13.6H244.77Z" fill="black" />

                            </svg>
                        </div>



                        <div className={s.graf_two}>
                            <svg width="274" height="284" viewBox="0 0 274 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M272.238 210.061H256.327V208.615C256.327 208.016 255.727 207.519 255.005 207.519C254.283 207.519 253.683 208.016 253.683 208.615V210.061H226.794V208.615C226.794 208.016 226.195 207.519 225.473 207.519C224.75 207.519 224.151 208.016 224.151 208.615V210.061H199.87C199.765 171.401 164.7 136.875 145.846 118.319C144.401 116.902 143.044 115.558 141.775 114.301C141.828 114.184 141.863 114.053 141.863 113.921C141.863 113.322 141.264 112.826 140.542 112.826H140.295C139.766 112.285 139.255 111.774 138.78 111.262V89.7403H140.542C141.264 89.7403 141.863 89.2436 141.863 88.6445C141.863 88.0455 141.264 87.5487 140.542 87.5487H138.78V65.2378H140.542C141.264 65.2378 141.863 64.741 141.863 64.142C141.863 63.5429 141.264 63.0462 140.542 63.0462H138.78V40.7499H140.542C141.264 40.7499 141.863 40.2531 141.863 39.6541C141.863 39.055 141.264 38.5582 140.542 38.5582H138.78V16.2474H140.542C141.264 16.2474 141.863 15.7506 141.863 15.1515C141.863 14.5525 141.264 14.0557 140.542 14.0557H138.78V1.46109C138.762 0.657492 137.969 0 137 0C136.031 0 135.238 0.657492 135.238 1.46109V14.0411H133.476C132.753 14.0411 132.154 14.5379 132.154 15.1369C132.154 15.736 132.753 16.2327 133.476 16.2327H135.238V38.5436H133.476C132.753 38.5436 132.154 39.0404 132.154 39.6395C132.154 40.2385 132.753 40.7353 133.476 40.7353H135.238V63.0316H133.476C132.753 63.0316 132.154 63.5283 132.154 64.1274C132.154 64.7264 132.753 65.2232 133.476 65.2232H135.238V87.5341H133.476C132.753 87.5341 132.154 88.0309 132.154 88.6299C132.154 89.229 132.753 89.7257 133.476 89.7257H135.238V107.434C132.26 104.118 128.895 100.567 125.3 96.7974C104.666 75.1148 76.4028 45.4254 76.4028 10.3007C76.4028 9.088 75.2223 8.10907 73.7597 8.10907C72.2972 8.10907 71.1167 9.088 71.1167 10.3007C71.1167 46.9449 100.05 77.3211 121.159 99.5151C125.124 103.679 128.859 107.61 132.013 111.175C132.472 111.686 132.983 112.241 133.529 112.826H133.494C132.771 112.826 132.172 113.322 132.172 113.921C132.172 114.52 132.771 115.017 133.494 115.017H135.256V136.992H133.494C132.771 136.992 132.172 137.489 132.172 138.088C132.172 138.687 132.771 139.184 133.494 139.184H135.256V161.495H133.494C132.771 161.495 132.172 161.991 132.172 162.59C132.172 163.189 132.771 163.686 133.494 163.686H135.256V185.983H133.494C132.771 185.983 132.172 186.479 132.172 187.078C132.172 187.677 132.771 188.174 133.494 188.174H135.256V210.061H108.754V208.615C108.754 208.016 108.155 207.519 107.433 207.519C106.71 207.519 106.111 208.016 106.111 208.615V210.061H79.2045V208.615C79.2045 208.016 78.6054 207.519 77.883 207.519C77.1605 207.519 76.5614 208.016 76.5614 208.615V210.061H49.6724V208.615C49.6724 208.016 49.0733 207.519 48.3509 207.519C47.6284 207.519 47.0293 208.016 47.0293 208.615V210.061H20.1227V208.615C20.1227 208.016 19.5236 207.519 18.8012 207.519C18.0787 207.519 17.4796 208.016 17.4796 208.615V210.061H1.76206C0.792926 210.061 0 210.719 0 211.522C0 212.326 0.792926 212.984 1.76206 212.984H17.4444V214.459C17.4444 215.058 18.0435 215.555 18.7659 215.555C19.4884 215.555 20.0875 215.058 20.0875 214.459V212.984H46.9941V214.459C46.9941 215.058 47.5932 215.555 48.3156 215.555C49.0381 215.555 49.6372 215.058 49.6372 214.459V212.984H76.5262V214.459C76.5262 215.058 77.1253 215.555 77.8477 215.555C78.5702 215.555 79.1693 215.058 79.1693 214.459V212.984H106.076V214.459C106.076 215.058 106.675 215.555 107.397 215.555C108.12 215.555 108.719 215.058 108.719 214.459V212.984H135.22V225.739C135.22 226.542 136.013 227.2 136.982 227.2C137.952 227.2 138.744 226.542 138.744 225.739V212.984H165.052V214.445C165.052 215.044 165.651 215.54 166.374 215.54C167.096 215.54 167.695 215.044 167.695 214.445V212.984H194.566V214.459C194.566 215.058 195.166 215.555 195.888 215.555C196.61 215.555 197.21 215.058 197.21 214.459V212.984H224.116V214.459C224.116 215.058 224.715 215.555 225.438 215.555C226.16 215.555 226.759 215.058 226.759 214.459V212.984H253.648V214.459C253.648 215.058 254.247 215.555 254.97 215.555C255.692 215.555 256.291 215.058 256.291 214.459V212.984H272.203C273.172 212.984 273.965 212.326 273.965 211.522C273.965 210.719 273.172 210.061 272.203 210.061H272.238ZM166.391 207.504C165.669 207.504 165.07 208.001 165.07 208.6V210.061H138.762V188.174H140.524C141.247 188.174 141.846 187.677 141.846 187.078C141.846 186.479 141.247 185.983 140.524 185.983H138.762V163.686H140.524C141.247 163.686 141.846 163.189 141.846 162.59C141.846 161.991 141.247 161.495 140.524 161.495H138.762V139.184H140.524C141.247 139.184 141.846 138.687 141.846 138.088C141.846 137.489 141.247 136.992 140.524 136.992H138.762V118.173C139.731 119.123 140.736 120.116 141.775 121.154C161.493 140.557 194.461 173.023 194.566 210.076H167.713V208.615C167.713 208.016 167.114 207.519 166.391 207.519V207.504Z" fill="black" />
                            </svg>

                        </div>

                        <div className={s.graf_three}>
                            <svg width="324" height="348" viewBox="0 0 324 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M324 139.307C324 140.292 323.062 141.098 321.916 141.098H303.081V142.924C303.081 143.658 302.393 144.267 301.518 144.267C300.643 144.267 299.955 143.658 299.955 142.924V141.098H268.159V142.924C268.159 143.658 267.472 144.267 266.597 144.267C265.722 144.267 265.034 143.658 265.034 142.924V141.098H233.217V142.924C233.217 143.658 232.509 144.267 231.655 144.267C230.801 144.267 230.092 143.658 230.092 142.924V141.098H198.317V142.888C198.317 143.64 197.609 144.231 196.754 144.231C195.9 144.231 195.192 143.64 195.192 142.888V141.098H164.084V167.971H166.167C167.021 167.971 167.73 168.562 167.73 169.314C167.73 170.066 167.021 170.657 166.167 170.657H164.084V197.995H166.167C167.021 197.995 167.73 198.604 167.73 199.338C167.73 200.072 167.021 200.681 166.167 200.681H164.084V228.019H166.167C167.021 228.019 167.73 228.61 167.73 229.362C167.73 230.114 167.021 230.705 166.167 230.705H164.084V258.044H166.167C167.021 258.044 167.73 258.634 167.73 259.386C167.73 260.138 167.021 260.729 166.167 260.729H164.084V276.717C164.084 277.702 163.146 278.507 162 278.507C160.854 278.507 159.916 277.702 159.916 276.717V260.729H157.833C156.979 260.729 156.27 260.12 156.27 259.386C156.27 258.652 156.979 258.044 157.833 258.044H159.916V230.705H157.833C156.979 230.705 156.27 230.096 156.27 229.362C156.27 228.628 156.979 228.019 157.833 228.019H159.916V200.681H157.833C156.979 200.681 156.27 200.09 156.27 199.338C156.27 198.586 156.979 197.995 157.833 197.995H159.916V170.657H157.833C156.979 170.657 156.27 170.048 156.27 169.314C156.27 168.58 156.979 167.971 157.833 167.971H159.916V141.098H128.579V142.924C128.579 143.658 127.871 144.267 127.016 144.267C126.162 144.267 125.454 143.658 125.454 142.924V141.098H93.637V142.924C93.637 143.658 92.9286 144.267 92.0743 144.267C91.2201 144.267 90.5116 143.658 90.5116 142.924V141.098H58.695V142.924C58.695 143.658 58.0075 144.267 57.1323 144.267C56.2572 144.267 55.5696 143.658 55.5696 142.924V141.098H23.7531V142.924C23.7531 143.658 23.0655 144.267 22.1904 144.267C21.3152 144.267 20.6277 143.658 20.6277 142.924V141.098H2.0836C0.937621 141.098 0 140.292 0 139.307C0 138.323 0.937621 137.517 2.0836 137.517H20.6277V135.745C20.6277 135.011 21.3361 134.402 22.1904 134.402C23.0446 134.402 23.7531 135.011 23.7531 135.745V137.517H55.5696V135.745C55.5696 135.011 56.2781 134.402 57.1323 134.402C57.9866 134.402 58.695 135.011 58.695 135.745V137.517H90.5116V135.745C90.5116 135.011 91.1992 134.402 92.0743 134.402C92.9494 134.402 93.637 135.011 93.637 135.745V137.517H125.454V135.745C125.454 135.011 126.162 134.402 127.016 134.402C127.871 134.402 128.579 135.011 128.579 135.745V137.517H158.958C158.958 134.903 159.291 132.486 159.916 130.248V110.071H157.833C156.979 110.071 156.27 109.462 156.27 108.728C156.27 107.994 156.979 107.385 157.833 107.385H159.916V80.0467H157.833C156.979 80.0467 156.27 79.438 156.27 78.7039C156.27 77.9699 156.979 77.3612 157.833 77.3612H159.916V50.0225H157.833C156.979 50.0225 156.27 49.4317 156.27 48.6797C156.27 47.9278 156.979 47.337 157.833 47.337H159.916V19.9983H157.833C156.979 19.9983 156.27 19.3895 156.27 18.6555C156.27 17.9214 156.979 17.3127 157.833 17.3127H159.916V1.89778C159.916 0.913081 160.854 0.107422 162 0.107422C163.146 0.107422 164.084 0.913081 164.084 1.89778V17.3127H166.167C167.021 17.3127 167.73 17.9214 167.73 18.6555C167.73 19.3895 167.021 19.9983 166.167 19.9983H164.084V47.337H166.167C167.021 47.337 167.73 47.9457 167.73 48.6797C167.73 49.4138 167.021 50.0225 166.167 50.0225H164.084V77.3612H166.167C167.021 77.3612 167.73 77.952 167.73 78.7039C167.73 79.4559 167.021 80.0467 166.167 80.0467H164.084V107.385H166.167C167.021 107.385 167.73 107.976 167.73 108.728C167.73 109.48 167.021 110.071 166.167 110.071H164.084V121.995C175.252 107.529 203.151 102.802 232.322 97.8607C236.03 97.2341 239.802 96.6075 243.573 95.9451C285.12 88.6404 319.041 86.116 319.374 86.0802C321.104 85.9549 322.604 87.0649 322.75 88.533C322.771 88.6225 322.771 88.6941 322.771 88.7657C322.771 90.1443 321.541 91.3259 319.916 91.4334C319.583 91.4692 285.995 93.9578 244.823 101.209C241.031 101.871 237.26 102.498 233.53 103.142C196.859 109.337 165.209 114.708 165.209 137.517H195.192V135.727C195.192 134.993 195.879 134.384 196.754 134.384C197.63 134.384 198.317 134.993 198.317 135.727V137.517H230.092V135.745C230.092 135.011 230.801 134.402 231.655 134.402C232.509 134.402 233.217 135.011 233.217 135.745V137.517H265.034V135.745C265.034 135.011 265.742 134.402 266.597 134.402C267.451 134.402 268.159 135.011 268.159 135.745V137.517H299.955V135.745C299.955 135.011 300.664 134.402 301.518 134.402C302.372 134.402 303.081 135.011 303.081 135.745V137.517H321.916C323.062 137.517 324 138.323 324 139.307Z" fill="black" />

                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <button className={s.btn_res} onClick={handlePrintResults}>Print Results</button>
        </div>
    )

}
export default TestMath;