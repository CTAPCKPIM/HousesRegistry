export function NetworkErrorMessage({message, dismiss}) {
	return(
			<div>
				{message}
				<button type='button' onClick={connectWallet}>
				<span aria-hidden='true'>$times;</span>
				</button>
			</div>		
	)
}