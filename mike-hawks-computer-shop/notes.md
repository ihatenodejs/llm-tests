# Notes for Mike Hawk's Computer Shop

## Structure Over Code

I noticed that models smaller than 14b would create a *structure* for a website, but not generate any code. While the prompt "Create a website" is generic, it is implied I am looking for code of *some sort*. The smaller models did not understand this, though I believe asking "create an HTML/CSS/JS website" would cause the model to output the code. However, I am not interested in testing hyper-specific prompts.

The smallest model which generated the code, as inferred by the prompt, was `qwen3-14b`.

The models who generated structure instead of code are as follows:

- `gemma3-12b` (8-bit)
- `qwen3-8b` (4-bit)
- `gemma-3n-e4b` (4-bit)
- `gemma3-4b` (4-bit)
- `qwen3-1.7b` (8-bit)
- `gemma3-1b` (4-bit)

Honorable mentions:

- `qwen3-4b` (8-bit) generated *some* HTML code snippets, though not a full .html file
