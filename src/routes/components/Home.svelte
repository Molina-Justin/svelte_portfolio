<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineLinkedin from 'svelte-icons-pack/ai/AiOutlineLinkedin';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import memoji from '../../lib/assets/memoji.jpg';
</script>

<div class="padding_container max_container flex flex-col md:flex-row md:justify-between">
	<div class="flex">
		<!-- Added margin here -->
		<div class="flex flex-col gap-4 justify-center md:mr-8">
			<a href="https://www.linkedin.com/">
				<Icon src={AiOutlineLinkedin} size={28} />
			</a>
			<a href="https://github.com/Molina-Justin">
				<Icon src={AiFillGithub} size={28} />
			</a>
		</div>
		<div class="flex justify-center w-full md:hidden">
			<img src={memoji} alt="Memoji" class="max-h-48 max-w-48" />
		</div>
	</div>
	<div class="flex-grow border">
		<!-- And here -->
		<h2>John Doe</h2>
		<span
			>Hey there! I'm Justin, a recent graduate, Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Esse consequatur doloribus quo fugiat omnis quidem eaque numquam exercitationem sapiente
			accusamus amet, nostrum porro iusto debitis at nihil tempore sed vitae soluta magni
			repellendus expedita commodi excepturi natus. Obcaecati dignissimos quas iste, iusto cumque
			accusamus sunt sequi nisi velit eum in consectetur quis earum architecto odit adipisci fuga
			voluptas porro consequatur deserunt veritatis! Vitae dolore laboriosam optio maxime non natus
			delectus reiciendis repellat tempore eveniet quia minus explicabo autem at sapiente,
			aspernatur ullam id similique atque fugit iusto enim. Perferendis impedit earum officia
			temporibus eligendi quasi delectus consequuntur praesentium voluptatum repudiandae.</span
		>
	</div>
	<div class="hidden md:flex md:ml-8 md:items-center">
		<img src={memoji} alt="Memoji" class="max-h-48 max-w-48" />
	</div>
</div>
