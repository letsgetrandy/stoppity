DIR = $(shell pwd)
PARENT = $(shell cd ..; pwd)
CHROME_APP = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
EXTENSION = "$(DIR)/tmp/stoppity"
PEMFILE = "$(PARENT)/stoppity.pem"


.PHONY: all clean crx xpi

all: | clean crx xpi

clean:
	rm -f stoppity.crx
	rm -f stoppity.xpi
	rm -rf tmp

crx:
	@echo "building for Chrome..."
	mkdir tmp
	cp -R chrome tmp/stoppity
	$(CHROME_APP) --pack-extension=$(EXTENSION) --pack-extension-key=$(PEMFILE) stoppity.crx
	mv tmp/stoppity.crx .
	rm -rf tmp

xpi:
	@echo "building for Firefox..."
	mkdir tmp
	cp -R firefox tmp/stoppity
	zip -r stoppity.xpi tmp/stoppity
	rm -rf tmp
