# llm-tests

My personal, web-dev focused LLM tests

## How tests are performed

I do all testing on my MacBook Pro M4, using LM Studio. I am only able to test models up to 64GB, due to memory limits. The setup may change in the future. I aim to create a consistent testing environment, by doing the following:

- Max context length is always used.
- The same prompt is used for every model.
- Prompts are written to be **unique**, and different from the samples provided by AI companies.
- If the LLM provided a structure, it is always followed. No files are combined/split to follow a certain format. Instructions (finding images/manual work) for humans are not followed.
- I never ask the model to fix it's work. If it's broken, it's used anyway. These tests are performed in one shot. If the model refuses or the output is not a website, the prompt may be re-tried.

## The prompts

For testing, I prefer to write short, unique, and entertaining prompts. This means the model is not given explicit instructions or help. I believe this makes the outputs more interesting!

I also do not prefer using LLMs for writing. This means the prompts are never AI generated (including this README!), which I believe yields better results.

## How I judge outputs

In `/test-dir/rank.md`, you will notice I may have ranked the models. But, ranking is subjective. Here's how I judge:

- Did the model fulfill all my requirements? Did it refuse all/some of the prompt?
- If I was to visit the website as an actual user, would I understand/get everything I needed?
- I prefer seeing results that are *complete*. This means a header, content, and a footer, when appropriate.

The ranking files are purely my own opinion, and no points or scoring is done.

## Test directory structure

```
test-name/
  model-name/       # May contain sub directories for things like reasoning effort
    raw.txt         # The raw output from the model
    test.xml        # Test environment details
    content/        # The root directory for the LLM's outputted project
  [...]
```

## The inspiration

This repo is inspired by [Bijan Bowen](https://www.youtube.com/@Bijanbowen)'s videos, along with prompt ideas from his videos, my own imagination, and articles I've read.
