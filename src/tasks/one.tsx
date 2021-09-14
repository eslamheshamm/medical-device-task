import { BackToHome } from "../App";
import { merge } from "../components/MergingArrays";
const ChallengeOne = () => {
	merge();
	return (
		<>
			<BackToHome />
			<h1 className="title is-1 has-text-white">Challenge 1</h1>
			<h2 className="subtitle has-text-grey-lighter">
				Inside <code>/tasks/one.js</code> you will find a set of arrays. Merge
				them into one array.
			</h2>
			<h2 className="subtitle has-text-grey-lighter">
				You may not install any additional libraries.
			</h2>
		</>
	);
};

export default ChallengeOne;
