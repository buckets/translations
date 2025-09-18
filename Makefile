SOURCE_FILES := $(filter-out langs/base.tsx langs/en.tsx, $(wildcard langs/*.tsx))
TRANSLATED_FILES := $(patsubst %.tsx, %.tsx.translated, $(SOURCE_FILES))
MAKEFLAGS += -j10

all: $(TRANSLATED_FILES)

langs/%.tsx.translated: langs/%.tsx
	nim r -d:release -d:ssl dev/translate_ai.nim -f $&lt;

accept:
	for file in $(SOURCE_FILES); do \
		echo "cp $${file}.translated $${file}"; \
	done

.PHONY: all accept

# cp $${file}.translated $$file;
# cp $${file%.translated} $$file;