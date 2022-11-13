<template>
	<header class="container bg-gray">
		<nav>
			<ul class="text-text-gray-500 flex flex-row space-x-6 py-4 text-12 font-medium">
				<li>
					<nuxt-link
						exact
						active-class="text-text-gray-700"
						to="/"
					>
						Калькулятор
					</nuxt-link>
				</li>
				<li>
					<nuxt-link
						active-class="text-text-gray-700"
						to="/rates"
					>
						Курс рубля
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>