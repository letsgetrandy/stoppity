DIR = $(shell pwd)
PARENT = $(shell cd ..; pwd)
CHROME_APP = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
EXTENSION = "$(DIR)/stoppity"
PEMFILE = "$(PARENT)/stoppity.pem"


.PHONY: all clean crx xpi

all: | clean crx xpi

clean:
	rm -f stoppity.crx
	rm -f stoppity.zip
	rm -f stoppity.xpi

crx:
	@echo "building for Chrome..."
	cp -R chrome stoppity
	$(CHROME_APP) --pack-extension=$(EXTENSION) --pack-extension-key=$(PEMFILE) stoppity.crx
	zip -r stoppity stoppity/
	rm -rf stoppity

xpi:
	@echo "building for Firefox..."
	cp -R firefox stoppity
	zip -r stoppity.xpi stoppity
	rm -rf stoppity
