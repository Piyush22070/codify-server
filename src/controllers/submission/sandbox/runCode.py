import sys

def secure_exec(code_file):
    with open(code_file, 'r') as f:
        code = f.read()

    # Minimal builtins and globals
    restricted_globals = {
        "__builtins__": {
            "print": print,
            "input": input,
            "range": range,
            "len": len,
            "int": int,
            "float": float,
            "str": str,
            "bool": bool,
            "list": list,
            "dict": dict,
            "enumerate": enumerate,
            "zip": zip,
        }
    }

    exec(code, restricted_globals)

if __name__ == "__main__":
    code_file = sys.argv[1]
    secure_exec(code_file)
