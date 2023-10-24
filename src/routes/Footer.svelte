<script>
	const date = new Date();
	const year = date.getFullYear();
</script>

<footer>
	<p style="display:inline;" id="footerText">
		© {year}
		<a href="http://torah.kabala.vn" style="text-decoration:none;color:#343434;">Torah.Kabala.vn</a>, Kabala.vn, all rights reserved.
		<span> | </span>
		<a href="https://treeoflife.kabala.vn">Tree Of Life</a>
		<span> | </span>
		<a href="https://777.kabala.vn/">777</a>
	</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		width: 90%;
		margin: 0 auto;
		text-align: center;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
