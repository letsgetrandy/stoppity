DIR = $(shell pwd)
PARENT = $(shell cd ..; pwd)
CHROME_APP = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
EXTENSION = "$(DIR)/stoppity"
PEMFILE = "$(PARENT)/stoppity.pem"


.PHONY: all clean crx xpi npm

all: | clean crx xpi

clean:
	rm -f stoppity.crx
	rm -f stoppity.zip
	rm -f stoppity.xpi

crx: npmcrx
	@echo "building for Chrome..."
	cp -R chrome stoppity
	$(CHROME_APP) --pack-extension=$(EXTENSION) --pack-extension-key=$(PEMFILE) stoppity.crx
	zip -r stoppity stoppity/
	rm -rf stoppity

xpi: npmxpi
	@echo "building for Firefox..."
	cp -R firefox stoppity
	cd stoppity; zip -r stoppity.xpi *; cd ..
	mv stoppity/stoppity.xpi .
	rm -rf stoppity

npm:
	@echo "checking for required npm packages..."
	npm install
	@echo "running tests"
	npm test

npmcrx: npm
	@echo "building for chrome..."
	npm run build-chrome

npmxpi: npm
	@echo "building for firefox..."
	npm run build-firefox

