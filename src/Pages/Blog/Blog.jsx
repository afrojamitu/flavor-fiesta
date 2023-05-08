import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';


const Blog = () => {
    const [loading, setLoading] = useState(false);

    const downloadPdf = () => {
        const capture = document.querySelector('.download-pdf');
        setLoading(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoading(false);
            doc.save('blog.pdf');
        })
    }

    return (
        <div className='download-pdf'>
            <div className='w-9/12 mx-auto'>
                <div className='flex flex-col items-center gap-3 my-5'>
                    <h1 className='text-3xl font-semibold text-center'>Here are some common <span className='text-red-600'>Q/A</span></h1>
                    <button onClick={downloadPdf} disabled={!(loading === false)} className='flex items-center gap-2 bg-red-600 rounded py-2 px-5 text-white hover:bg-red-500'>
                        {
                            loading ? <span>Downloading...</span> : <span className='flex items-center gap-3'>Download PDF <FaDownload /></span>
                        }
                    </button>
                </div>

                <div className='mb-4'>
                    <h1 className='text-2xl font-semibold pb-3'>1) Tell us the differences between uncontrolled and controlled components.</h1>

                    <p className='text-lg'><span className='font-bold'>Answer: </span>
                        In the context of web development, controlled and uncontrolled components refer to how form data is handled within a component.
                        <br></br><br></br>
                        <span className='font-bold'>Uncontrolled components</span> are form inputs where the data is handled by the DOM, rather than the component's React state. In other words, the value of an uncontrolled component is directly set by the user, and not by React. This can make handling and validating form data more difficult, as the component doesn't have direct control over the data.
                        <br></br><br></br>
                        <span className='font-bold'>Controlled components</span>, on the other hand, are form inputs whose values are controlled by React through the component's state. This means that the component has full control over the form data, allowing for more fine-grained validation and handling.
                    </p>
                </div>

                <div className='mb-4'>
                    <h1 className='text-2xl font-semibold pb-3'>2) How to validate React props using PropTypes</h1>

                    <p className='text-lg'><span className='font-bold'>Answer: </span>
                        Props are an important mechanism for passing the <span className='font-bold'>read-only</span> attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use <span className='font-bold'>props validation</span> in improving react components.
                        <br></br><br></br>
                        Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property <span className='font-bold'>PropTypes</span> that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.
                    </p>
                </div>

                <div className='mb-4'>
                    <h1 className='text-2xl font-semibold pb-3'>3) Tell us the difference between nodejs and express js.</h1>

                    <p className='text-lg'><span className='font-bold'>Answer: </span>
                        <span className='font-bold'>Node.js</span> is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.
                        <br></br><br></br>
                        <span className='font-bold'>Express.js</span> a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                    </p>
                </div>
                <div className='mb-4'>
                    <h1 className='text-2xl font-semibold pb-3'>3) Tell us the difference between nodejs and express js.</h1>

                    <p className='text-lg'><span className='font-bold'>Answer: </span>
                        <span className='font-bold'>Node.js</span> is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.
                        <br></br><br></br>
                        <span className='font-bold'>Express.js</span> a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                    </p>
                </div>
                <div className='mb-4'>
                    <h1 className='text-2xl font-semibold pb-3'>4) What is a custom hook, and why will you create a custom hook?</h1>

                    <p className='text-lg'><span className='font-bold'>Answer: </span>
                        In React, a custom hook is a function that allows developers to extract common logic from components and reuse it across multiple components. Custom hooks are created using the <span className='font-bold'>use</span> prefix, and they follow the same rules as React's built-in hooks, such as <span className='font-bold'>useState</span> and <span className='font-bold'>useEffect</span>.
                        <br></br><br></br>
                        Custom hooks can be used to encapsulate complex logic, such as handling form data or managing stateful interactions with APIs, into reusable functions that can be easily shared between components. By separating this logic from the components themselves, custom hooks can help to improve code organization, reduce code duplication, and make components easier to understand and maintain.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;