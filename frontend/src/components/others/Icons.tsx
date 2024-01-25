import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Icons() {
  return (
    <div className='flex gap-4 justify-center items-center pt-4 pb-4'>
        <a href="https://github.com/GabrielLima2803" target='_blank' className='text-white text-3xl'>
      <i className="bi bi-github text-3xl cursor-pointer hover:text-blue-600 transition-colors duration-300"></i>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-lima-5a04a2294/" target='_blank' className='text-white'>
      <i className="bi bi-linkedin text-3xl cursor-pointer hover:text-blue-600 transition-colors duration-300"></i>
        </a>
    </div>
  );
}
