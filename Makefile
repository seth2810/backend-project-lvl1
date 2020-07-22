install:
	npm ci

brain-even:
	node bin/brain-even.js

brain-even:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-proression:
	node bin/brain-proression.js

brain-prime:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
