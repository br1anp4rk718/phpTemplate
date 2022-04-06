<?php if($n=='ob' || $n=='obtcr'){ ?>
<style>
	.vjs-progress-control {
		display: none !important;
	}
</style>
<?php } ?>

<?php if($n=='aol' || $n=='aoltcr' || $n=='dbtcr'){ ?>
<style>
	.video-js .vjs-time-control {
		display: none;
	}

	.video-js .vjs-progress-control.vjs-control {
		display: none;
	}
</style>
<?php } ?>