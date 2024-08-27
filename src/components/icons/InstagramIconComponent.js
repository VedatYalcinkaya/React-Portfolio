import { ReactComponent as InstagramIcon } from '../../assets/icons/instagramIcon.svg';

function InstagramIconComponent() {
  return (
    <div className="flex items-center space-x-2">
      <InstagramIcon className="w-16 h-16 text-primary hover:scale-150 hover:transform-gpu transition-transform duration-300 ease-in-out" />
    </div>
  );
}

export default InstagramIconComponent;