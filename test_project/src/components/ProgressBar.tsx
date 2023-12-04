import { PROGRESS_BAR_SIZE, ProgressBar } from '../../../src';

export const ProgressBarApp: React.FC = () => {
  return (
    <div style={{width:" 300px"}}>
       ProgressBar<br/>
      <ProgressBar progress={120}/><br/>
      <ProgressBar size={PROGRESS_BAR_SIZE.Small} progress={30}/>
    </div>
  );
};