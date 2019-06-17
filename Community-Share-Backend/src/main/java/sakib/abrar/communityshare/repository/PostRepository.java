package sakib.abrar.communityshare.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import sakib.abrar.communityshare.model.Post;


public interface PostRepository extends CrudRepository<Post, Long>{

    List<Post> findBySharedWith(String sharedWith);

}