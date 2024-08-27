import { ReactComponent as GithubIcon } from '../../assets/icons/githubIcon.svg';

function GithubIconComponent() {
  return (
    <div className="flex items-center space-x-2">
      <GithubIcon className="w-16 h-16 text-primary hover:scale-150 hover:transform-gpu transition-transform duration-300 ease-in-out" />
    </div>
  );
}

export default GithubIconComponent;