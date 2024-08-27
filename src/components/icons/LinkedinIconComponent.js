import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedinIcon.svg';

function LinkedinIconComponent() {
  return (
    <div className="flex items-center space-x-2">
      <LinkedinIcon className="w-16 h-16 text-primary hover:scale-150 hover:transform-gpu transition-transform duration-300 ease-in-out" />
    </div>
  );
}

export default LinkedinIconComponent;