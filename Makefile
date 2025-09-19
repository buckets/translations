SOURCE_FILES := $(filter-out langs/base.tsx langs/en.tsx, $(wildcard langs/*.tsx))
TRANSLATED_FILES := $(patsubst %.tsx, %.tsx.translated, $(SOURCE_FILES))
MAKEFLAGS += -j10

all: $(TRANSLATED_FILES)

dev/translate_ai: dev/translate_ai.nim
	nim c -d:release -d:ssl $<

langs/%.tsx.translated: langs/%.tsx dev/translate_ai
	dev/translate_ai -f $<

accept:
	for file in $(SOURCE_FILES); do \
		cp $${file}.translated $${file}; \
	done

.PHONY: all accept
.PRECIOUS: $(TRANSLATED_FILES)

