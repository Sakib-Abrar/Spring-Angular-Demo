package sakib.abrar.communityshare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sakib.abrar.communityshare.model.Post;
import sakib.abrar.communityshare.repository.PostRepository;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    PostRepository repository;

    @RequestMapping("getall")
    public ArrayList<Post> getPosts(){

        String username = "Anonymous";

        ArrayList<Post> posts = new ArrayList<>();

        for(Post entry:repository.findBySharedWith("all")){
            posts.add(entry);
            System.out.println(entry.toString());
        }

        for(Post entry:repository.findBySharedWith(username)){
            posts.add(entry);
            System.out.println(entry.toString());
        }

        return posts;
    }

    @PostMapping("create")
    public String createPost(@RequestBody Post newPost){

        repository.save(newPost);

        return "post added successfully";

    }

    @RequestMapping("/delete")
    public String deletePost(){
        return "got it";
    }
}
