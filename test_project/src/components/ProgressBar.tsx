import { PROGRESS_BAR_SIZE, ProgressBar } from '../../../src';

export const ProgressBarApp: React.FC = () => {
  return (
    <div>
       ProgressBar<br/>
      <ProgressBar progress={30}/><br/>
      <ProgressBar size={PROGRESS_BAR_SIZE.Small} progress={30}/>
    </div>
  );
};